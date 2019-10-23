import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  const rootApi = "/api/v1";

  //用户
  router.get("/users", controller.users.create);

  //文章
  // router.get("/article/all", controller.article.showAll);
  // router.post("/article/create", controller.article.create);
  // router.post("/article/delete", controller.article.delete);
  // router.post("/article/update", controller.article.update);

  const apiArticle = `${rootApi}/article`;
  router.get(`${apiArticle}/`, controller.article.showAll);
  router.post(`${apiArticle}/`, controller.article.create);
  router.delete(`${apiArticle}/:id`, controller.article.delete);
  router.put(`${apiArticle}/:id`, controller.article.update);
};
