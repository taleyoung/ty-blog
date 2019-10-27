import { Controller } from "egg";

export default class ArticleController extends Controller {
  public async create() {
    const { ctx } = this;
    const { title = "test", content = "test" } = ctx.request.body;
    const res = await ctx.service.article.insertArticle(title, content);
    ctx.returnBody(200, res);
  }

  public async show() {
    const { ctx } = this;
    try {
      const { id } = ctx.params;
      const { page, page_size, order } = ctx.request.query;
      const res = id
        ? await ctx.service.article.getArticleDetail(id)
        : await ctx.service.article.getArticleList(page, page_size, order);
      ctx.returnBody(200, res);
    } catch (error) {
      ctx.returnBody(404, {}, "查询失败");
    }
  }

  public async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.article.deleteArticle(id);
    ctx.returnBody(200, res);
  }

  public async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    console.log("~~~~~~~ctx.request.body", ctx.request.body);
    const { title = "", content = "" } = ctx.request.body;
    console.log("title,content", title, content);
    const res = await ctx.service.article.updateArticle(id, title, content);
    ctx.returnBody(200, res);
  }
}
