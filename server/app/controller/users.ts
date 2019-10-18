// // app/controller/users.js
// const Controller = require("egg").Controller;

// function toInt(str) {
//   if (typeof str === "number") return str;
//   if (!str) return str;
//   return parseInt(str, 10) || 0;
// }

// class UserController extends Controller {
//   async index() {
//     const ctx = this.ctx;
//     const query = {
//       limit: toInt(ctx.query.limit),
//       offset: toInt(ctx.query.offset)
//     };
//     ctx.body = await ctx.model.User.findAll(query);
//   }

//   async show() {
//     const ctx = this.ctx;
//     ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
//   }

//   async create() {
//     const ctx = this.ctx;
//     const { name, age } = ctx.request.body;
//     const user = await ctx.model.User.create({ name, age });
//     ctx.status = 201;
//     ctx.body = user;
//   }

//   async update() {
//     const ctx = this.ctx;
//     const id = toInt(ctx.params.id);
//     const user = await ctx.model.User.findByPk(id);
//     if (!user) {
//       ctx.status = 404;
//       return;
//     }

//     const { name, age } = ctx.request.body;
//     await user.update({ name, age });
//     ctx.body = user;
//   }

//   async destroy() {
//     const ctx = this.ctx;
//     const id = toInt(ctx.params.id);
//     const user = await ctx.model.User.findByPk(id);
//     if (!user) {
//       ctx.status = 404;
//       return;
//     }

//     await user.destroy();
//     ctx.status = 200;
//   }
// }

// module.exports = UserController;

// const Controller = require("egg").Controller;
import { Controller } from "egg";

const toInt = str => {
  if (typeof str === "number") return str;
  if (!str) {
    return str;
  }
  return parseInt(str, 10) || 0;
};

class UserController extends Controller {
  // async index() {
  //   const ctx = this.ctx;
  //   const query = {
  //     limit: toInt(ctx.query.limit),
  //     offset: toInt(ctx.query.offset)
  //   };
  //   console.log("ctx.query", ctx.query);
  //   console.log("ctx.model", ctx.model.Users);
  //   ctx.body = await ctx.model.Users.findAll(query);
  //   // ctx.body = "22";
  // }
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Users.findByPk(toInt(ctx.params.id));
  }
  async create() {
    const ctx = this.ctx;
    // const { name, age } = ctx.request.body;
    console.log("ctx", ctx);

    const { name, age } = ctx.query;
    const user = await ctx.model.Users.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
  }
}
export default UserController;
