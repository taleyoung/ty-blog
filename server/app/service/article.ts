import { Service } from "egg";

export default class ArticleService extends Service {
  public async getAllArticle() {
    let { ctx } = this;
    return await ctx.model.Article.findAll({});
  }
}
