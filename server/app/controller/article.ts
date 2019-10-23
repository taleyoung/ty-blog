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
    ctx.returnBody(200, res);
  }
  public async showAll() {
    const { ctx } = this;
    try {
      const res = await ctx.service.article.getAllArticle();
      ctx.returnBody(200, res);
    } catch (error) {
      ctx.returnBody(404, {}, "查询失败");
    }
  }
  public async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.article.deleteArticle({ id });
    ctx.returnBody(200, res);
  }

  public async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { title = "", content = "" } = ctx.request.body;
    const params = {
      id,
      title,
      content
    };
    const res = await ctx.service.article.updateArticle(params);
    ctx.returnBody(200, res);
  }
}
