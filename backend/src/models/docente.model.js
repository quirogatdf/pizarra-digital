module.exports = (sequelize, type) => {
  return sequelize.define('docentes', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: type.STRING(8),
    apellido: type.STRING(50),
    nombre: type.STRING(50),
    fecha_nacimiento: type.DATE,
  },
    {
      sequelize,
      timestamps: false,
      raw:false,
    }
  )
}
