import { Service } from "egg";
import * as dayjs from "dayjs";
import {
  ArticleScheme,
  ArticlePageList
} from "../../typings/app/service/article";
export default class ArticleService extends Service {
  public async getArticleDetail(id: number) {
    let { ctx } = this;
    const info = await ctx.model.Article.findOne({
      attributes: ["id", "title", "content", "updated_at"],
      where: { id }
    });
    const tags = await this.getTagsByArticleId(info.id);
    const res: ArticleScheme = {
      id: info.id,
      title: info.title,
      content: info.content,
      updatedAt: dayjs(info.updatedAt).format("YYYY-MM-DD HH:MM"),
      tags: [...tags]
    };
    return res;
  }

  public async getArticleList(
    page: string = "1",
    page_size: string = "10",
    order: string = "DESC"
  ) {
    let { ctx } = this;
    let pageNum = parseInt(page);
    let limit = parseInt(page_size);
    let offset = (pageNum - 1) * limit;
    try {
      const infoList: ArticlePageList = await ctx.model.Article.findAndCountAll(
        {
          attributes: ["id", "title", "content", "updated_at"],
          order: [["updated_at", order]],
          offset,
          limit
        }
      );
      let data: Array<ArticleScheme> = [];
      await Promise.all(
        infoList.rows.map(async articleInfo => {
          const tags = await this.getTagsByArticleId(articleInfo.id);
          data.push({
            id: articleInfo.id,
            title: articleInfo.title,
            content: articleInfo.content,
            updatedAt: dayjs(articleInfo.updatedAt).format("YYYY-MM-DD HH:MM"),
            tags
          });
        })
      );
      return {
        current_page: pageNum,
        total: infoList.count,
        data
      };
    } catch (error) {
      console.log("error", error);
    }
  }

  public async getTagsByArticleId(articleId: number | string) {
    let { ctx } = this;
    try {
      const tagInfoArr = await ctx.model.TagArticle.findAll({
        attributes: ["id"],
        where: { article_id: articleId }
      });
      let tags: any = [];
      await Promise.all(
        tagInfoArr.map(async tagInfo => {
          const name = await this.getTagNameById(tagInfo.id);
          tags.push(name);
        })
      );
      return tags;
    } catch (error) {
      console.log("error", error);
    }
  }

  public async getTagNameById(id: number) {
    const tag = await this.ctx.model.Tag.findOne({ where: { id } });
    return tag.name;
  }

  public async insertArticle(title: string, content: string) {
    const { ctx } = this;
    return await ctx.model.Article.create({ title, content });
  }

  public async deleteArticle(id: number) {
    const { ctx } = this;
    return await ctx.model.Article.destroy({ where: { id } });
  }

  public async updateArticle(id: number, title: string, content: string) {
    try {
      const { ctx } = this;
      await ctx.model.Article.update({ title, content }, { where: { id } });
      return await this.getArticleDetail(id);
    } catch (error) {
      console.log("error", error);
    }
  }
}
