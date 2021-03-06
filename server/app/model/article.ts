module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const ARTICLE = app.model.define(
    "article",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING(32) },
      content: { type: STRING(255) },
      createdAt: { type: DATE, defaultValue: NOW },
      updatedAt: { type: DATE, defaultValue: NOW }
    },
    {
      freezeTableName: true
    }
  );
  return ARTICLE;
};
