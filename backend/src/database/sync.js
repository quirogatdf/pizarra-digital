'use strict'
const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

const NovedadesModel = require('../models/novedad.model');
const DocentesModel = require('../models/docente.model');
const UsersModel = require('../models/user.models');

const Novedades = NovedadesModel(sequelize, Sequelize);
const Docentes = DocentesModel(sequelize, Sequelize);
const Users = UsersModel(sequelize, Sequelize);


// Docentes.hasMany(Novedades,{
//   foreignKey:'docenteId'
// });
Novedades.belongsTo(Docentes, {
  foreignKey:'docenteId',
  onDelete: 'cascade',
});
// Novedades.hasMany(Docentes, { foreignKey: 'docenteId' });
// Docentes.belongsTo(Novedades);

sequelize.sync({ force: false }).then(() => {
  console.log('Tablas sincronizadas.');
  
});
module.exports = {
  Novedades,
  Docentes,
  Users

}
