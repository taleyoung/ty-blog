import { Controller } from "egg";

export default class TagCaontroller extends Controller {
  public async show() {
    const { ctx } = this;
    const res = await ctx.service.tag.getAllTag();
    ctx.returnBody(200, res);
  }

  public async create() {
    const { ctx } = this;
    const { name = "" } = ctx.request.body;
    const res = await ctx.service.tag.insertTag(name);
    ctx.returnBody(200, res);
  }

  public async delete() {
    const { ctx } = this;
    const { name } = ctx.params;
    const res = await ctx.service.tag.deleteTag(name);
    ctx.returnBody(200, res);
  }
}
