module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  const TAG = app.model.define(
    "tag",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(255) },
      createdAt: { type: DATE, defaultValue: NOW },
      updatedAt: { type: DATE, defaultValue: NOW }
    },
    {
      freezeTableName: true
    }
  );
  return TAG;
};
