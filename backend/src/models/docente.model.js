module.exports = (sequelize, type) => {
  return sequelize.define('docentes', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: type.STRING(8),
      allowNull: false,
      validate: {
        notNull: { msg: 'dni is required' }
      }
    },
    apellido: type.STRING(50),
    nombre: type.STRING(50),
    fecha_nacimiento: type.DATE,
    telefono: type.STRING(25),
    email: type.STRING(100)
  },
    {
      sequelize,
      timestamps: false,
      raw: false,
    }
  )
}
