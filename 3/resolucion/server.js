const express = require('express')
const operaciones = require('./rutas/operaciones')

const app = express()

app.get('/', (req,res) => {
    res.send('Hola Yarn')
})

app.use('/operaciones', operaciones.router)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))