import { Controller } from "egg";

export default class ArticleController extends Controller {
  public async create() {
    const { ctx } = this;
    const { title = "暂无", content = "暂无" } = ctx.request.body;
    const params = {
      title,
      content
    };
    const res = await ctx.service.article.insertArticle(params);
    ctx.body = res;
    ctx.status = 200;
  }
  public async showAll() {
    const { ctx } = this;
    const res = await ctx.service.article.getAllArticle();
    ctx.body = res;
    ctx.status = 200;
  }
  public async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const params = {
      id
    };
    const res = await ctx.service.article.deleteArticle(params);
    ctx.body = res;
    ctx.status = 200;
  }

  public async update() {
    const { ctx } = this;
    const { id, title = "", content = "" } = ctx.request.body;
    const params = {
      id,
      title,
      content
    };
    const res = await ctx.service.article.updateArticle(params);
    ctx.body = res;
    ctx.status = 200;
  }
}
