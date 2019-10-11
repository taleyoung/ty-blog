import { Controller } from "egg";

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = "hi";
  }
}
