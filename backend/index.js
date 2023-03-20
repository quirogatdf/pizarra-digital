const express = require('express');
const helmet = require('helmet')                   
const { SERVER } = require('./src/config/config');       //Llamado a la variable de entorno

const cors = require('cors');

// const initServices = require('./src/services');
// const prepareRoutes = require('./src/routes/auth');

/* Configuramos nuestro servidor express */
const app = express();




/* Realizamos llamado a nuestra Base de Datos */
require('./src/database/db');
//require('./src/database/sync');


/* Permite recibir parámetros en formato JSON */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const apiRouter = require('./src/routes/index')
app.use('/api', apiRouter);
// initServices(app);/* Initializes passport and passport sessions*/
// app.use(passport.initialize());
// initializeAuth0(app);
// app.use(prepareRoutes());
// app.use(initMercadoPagoRouter());
/*Agregar seguridad a nuestro server usando Helmet*/
app.use(helmet());

/* Configuramos  nuestras rutas */
//const apiRouter = require('./src/routes/api');
//app.use('/api', apiRouter);
/* Configuraciones de Swagger */
//const swaggerOptions = {
//  swaggerDefinition:{
//   info:{
//      version: "1.0.0",
//      title: "Mi primera API",
//     description: "API para gestión de pedidos de un restaurante. Los usuarios pueden registrarse, loguearse, ver el listado de productos y realizar/consultar pedidos. Los administradores pueden realizar operaciones CRUD sobre usuarios, productos y ordenes",
//      servers:["https://www.delilah-resto.tk"]
//    }
//  },
// basePath:"/api",
//  apis: ["./src/docs/swagger.js"]
//}
// swaggerDocs = require('./src/docs/swagger.json')
// //const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs',
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerDocs)
// );

/*Iniciando servidor */
app.listen(SERVER.PORT, () => {
    console.log(`La aplicación se stá ejecutando en el ambiente:${process.env.NODE_ENV}`); 
    console.log(`Servidor ejecuntadose en el puerto ${SERVER.PORT}`);
})

module.exports = app

