module.exports = app => {
  const { INTEGER, DATE, NOW } = app.Sequelize;
  const TagArticle = app.model.define(
    "tag_article",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      tag_id: { type: INTEGER },
      article_id: { type: INTEGER },
      createdAt: { type: DATE, defaultValue: NOW },
      updatedAt: { type: DATE, defaultValue: NOW }
    },
    {
      freezeTableName: true
    }
  );
  return TagArticle;
};
