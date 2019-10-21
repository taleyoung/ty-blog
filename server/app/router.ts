import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  //用户
  router.get("/users", controller.users.create);

  //文章
  router.get("/article/all", controller.article.showAll);
  router.post("/article/create", controller.article.create);
  router.post("/article/delete", controller.article.delete);
  router.post("/article/update", controller.article.update);
};
