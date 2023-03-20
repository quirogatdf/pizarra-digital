const {Sequelize} = require('sequelize');
const {DB} = require('../config/config');

const sequelize = new Sequelize(DB.DATABASE, DB.USERNAME, DB.PASSWORD,{
        host: DB.HOST,
        dialect: DB.DIALECT,
        logging: false,
        query: {raw:true},
    }
);
async function validar_conexion() {
    try {
        await  sequelize.authenticate();
        console.log('La conexión a la base de datos se ha establecido correctamente.');
    } catch (error) {
        console.error('No se puede conectar a la base de datos, ', error)
    }
} 

validar_conexion();

module.exports = {sequelize} 
