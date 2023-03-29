'use strict'
const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

const NovedadesModel = require('../models/novedad.model');
const DocentesModel = require('../models/docente.model');

const Novedades = NovedadesModel(sequelize, Sequelize);
const Docentes = DocentesModel(sequelize, Sequelize);


// Docentes.hasMany(Novedades,{
//   foreignKey:'docenteId'
// });
Novedades.belongsTo(Docentes, {
  foreignKey:'docenteId'
});
// Novedades.hasMany(Docentes, { foreignKey: 'docenteId' });
// Docentes.belongsTo(Novedades);

sequelize.sync({ force: false }).then(() => {
  console.log('Tablas sincronizadas.');
  
});
module.exports = {
  Novedades,
  Docentes
}
