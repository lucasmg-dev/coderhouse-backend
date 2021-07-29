const express = require('express')
const router = express.Router()
const operaciones = require('../controlador/operaciones')

router.get('/suma', operaciones.suma)

router.get('/resta', operaciones.resta)

router.get('/mult', operaciones.mult)

router.get('/div', operaciones.div)

router.get('/listar', operaciones.listar)

module.exports = {
    router
}