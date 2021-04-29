const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const PixelMatrix = require('./pixelMatrix.js')

const pixelMatrix = new PixelMatrix()

app.use(express.static('public'))

app.get('/reset', (req, res) => {
    pixelMatrix.reset()
    io.sockets.emit('listaDePuntos', pixelMatrix.asArray())
    res.redirect('/')
})

io.on('connection', socket => {
    const thisClientIP = socket.handshake.address
    socket.emit('address', thisClientIP)
    socket.emit('listaDePuntos', pixelMatrix.asArray())

    socket.on('pageLoaded', () => {
        socket.emit('listaDePuntos', pixelMatrix.asArray())
    })

    socket.on('nuevoPunto', pixelData => {
        const pixel = pixelMatrix.paintPixel(pixelData)
        io.sockets.emit('nuevoPunto', pixel)
    })
})

const PORT = process.env.PORT || 8080

const server = http.listen(PORT, () => {
    console.log(`Servidor Http con Websockets escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
