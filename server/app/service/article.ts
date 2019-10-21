import { Service } from "egg";

export default class ArticleService extends Service {
  public async getAllArticle() {
    let { ctx } = this;
    return await ctx.model.Article.findAll({});
  }
  public async insertArticle(params) {
    const { ctx } = this;
    return await ctx.model.Article.create(params);
  }
  public async deleteArticle(params) {
    const { ctx } = this;
    return await ctx.model.Article.destroy({ where: params });
  }
  public async updateArticle(params) {
    const { ctx } = this;
    return await ctx.model.Article.update(
      { title: params.title, content: params.content },
      { where: { id: params.id } }
    );
  }
}
