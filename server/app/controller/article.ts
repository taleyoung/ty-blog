import { Controller } from "egg";

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "hi";
    console.log("this.service.article", this.service.article.getAllArticle());
  }
}
