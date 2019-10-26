import { Service } from "egg";
import { ArticleScheme } from "../../typings/app/service/article";
export default class ArticleService extends Service {
  public async getArticleDetail(id: number) {
    let { ctx } = this;
    const info = await ctx.model.Article.findOne({ where: { id } });
    const tags = await this.getTagsByArticleId(info.id);
    const res: ArticleScheme = {
      id: info.id,
      title: info.title,
      content: info.content,
      updatedAt: info.updatedAt,
      tags: [...tags]
    };
    return res;
  }

  public async getArticleList() {
    let { ctx } = this;
    const infoList = await ctx.model.Article.findAll();
    let res: Array<ArticleScheme> = [];
    await Promise.all(
      infoList.map(async articleInfo => {
        const item: ArticleScheme = await this.getArticleDetail(articleInfo.id);
        res.push(item);
      })
    );
    return res;
  }

  public async getTagsByArticleId(articleId: number) {
    let { ctx } = this;
    try {
      const tagInfoArr = await ctx.model.TagArticle.findAll({
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
    } catch (error) {}
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
    const { ctx } = this;
    return await ctx.model.Article.update(
      { title, content },
      { where: { id } }
    );
  }
}
