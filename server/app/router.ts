import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  const rootApi = "/api/v1";

  //用户
  router.get("/users", controller.users.create);

  //文章
  const apiArticle = `${rootApi}/article`;
  router.get(`${apiArticle}/:id?`, controller.article.show);
  router.post(`${apiArticle}/`, controller.article.create);
  router.delete(`${apiArticle}/:id`, controller.article.delete);
  router.put(`${apiArticle}/:id`, controller.article.update);

  //标签
  const apiTag = `${rootApi}/tag`;
  router.get(`${apiTag}/`, controller.tag.show);
  router.post(`${apiTag}/`, controller.tag.create);
  router.delete(`${apiTag}/:name`, controller.tag.delete);
};
