const router = require('express').Router();

const novedadRoutes = require('./novedad.routes');
const docenteRoutes = require('./docente.routes');

router
    .use('/docente',docenteRoutes)
    .use('/novedad', novedadRoutes)
module.exports = router

