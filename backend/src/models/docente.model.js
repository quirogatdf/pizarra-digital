module.exports = (sequelize, type) => {
  return sequelize.define('Docentes', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: type.STRING(8),
    apellido: type.STRING(50),
    nombre: type.STRING(50),
  },
    {
      sequelize,
      timestamps: false,
    }
  )
}
