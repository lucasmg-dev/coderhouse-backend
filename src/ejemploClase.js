// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual:
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'.
// De 20 a 5 hs será 'Buenas noches!'.

// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.


const http = require('http')
const PORT = 8080

const server = http.createServer((req, res) => {
  console.log('recibiendo peticion:')
  console.log(req)
  res.end('ok, recibido')
})

server.listen(PORT, () => {
  console.log(`ya me conecté al puerto ${PORT}`)
})