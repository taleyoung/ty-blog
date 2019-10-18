import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  console.log("controller", controller.users);

  //用户
  router.get("/users", controller.users.create);

  //文章
};
