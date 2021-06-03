import express, { json } from 'express'
import { crearRouterUsuarios } from './router/usuarios.js'
import { crearApiUsuariosMock } from './api/usuarios.js'

const app = express()

const apiUsuarios = crearApiUsuariosMock()
const routerUsuarios = crearRouterUsuarios(apiUsuarios)

app.use(json())

app.use('/api/usuarios', routerUsuarios)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor: ${error}`))
