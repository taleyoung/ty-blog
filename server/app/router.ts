import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  const rootApi = "/api/v1";

  //用户
  router.get("/users", controller.users.create);

  //文章
  const apiArticle = `${rootApi}/article`;
  router.get(`${apiArticle}/`, controller.article.showAll);
  router.get(`${apiArticle}/:id`, controller.article.showDetail);
  router.post(`${apiArticle}/`, controller.article.create);
  router.delete(`${apiArticle}/:id`, controller.article.delete);
  router.put(`${apiArticle}/:id`, controller.article.update);
};
