module.exports = (sequelize, type) => {
  return sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: type.STRING(50),
    password: type.STRING(50),
    token: type.STRING(1000),
  },
    {
      sequelize,
      timestamps: false,
    }
  )
}
