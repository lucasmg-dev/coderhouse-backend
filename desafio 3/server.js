const express = require('express')

const numeros = []

const app = express()
app.use(express.json())

app.post('/ingreso', (req, res) => {
    const { numero } = req.body
    numeros.push(numero)
    res.send(`Número ${numero} almacenado`)
})

app.get('/egreso', (req, res) => {
    res.json({ numeros })
})

const PORT = 8080
const server = app.listen(PORT,
    () => console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
)
server.on('error', error => console.log(`Error en servidor http`, error))
