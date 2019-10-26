import { Service } from "egg";

export default class TagService extends Service {
  public async getAllTag() {
    const { ctx } = this;
    return await ctx.model.Tag.findAll();
  }

  public async insertTag(name: string) {
    const { ctx } = this;
    const res = await ctx.model.Tag.create({ name });
    return res;
  }

  public async deleteTag(name: string) {
    const { ctx } = this;
    return await ctx.model.Tag.destroy({ where: { name } });
  }
}
