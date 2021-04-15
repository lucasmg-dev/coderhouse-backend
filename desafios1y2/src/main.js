import express from 'express'

import { crearRouterPersonas } from './RouterPersonas.js'
import { crearRouterMascotas } from './RouterMascotas.js'

const app = express()

app.use('/personas', crearRouterPersonas())
app.use('/mascotas', crearRouterMascotas())

app.use('/recursos', express.static('public'))

const server = app.listen(8080, () => {
  console.log(`conectado a puerto: ${server.address().port}`)
})
server.on('error', error => {
  console.log(error.message)
})