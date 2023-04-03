const router = require('express').Router();

const novedadRoutes = require('./novedad.routes');
const docenteRoutes = require('./docente.routes');
const authRoutes = require('./auth.routes');

router
    .use('/docente',docenteRoutes)
    .use('/novedad', novedadRoutes)
    .use('/auth', authRoutes)
module.exports = router

