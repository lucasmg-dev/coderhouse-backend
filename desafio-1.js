const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const FileStore = require("session-file-store")(session)
const sessionStore = new FileStore({
  path: "./sesiones",
  ttl: 60,
  retries: 0
})

const app = express()
app.use(cookieParser())
app.use(session({
  store: sessionStore,
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

const getNombreSession = req => req.session.nombre? req.session.nombre: ''

app.get('/', (req,res) => {
  if(req.session.contador) {
    req.session.contador++
    res.send(`${getNombreSession(req)} visitaste la página ${req.session.contador} veces.`)
  }
  else {
    let { nombre } = req.query
    req.session.nombre = nombre
    req.session.contador = 1
    res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
  }
})

app.get('/olvidar', (req,res) => {
  let nombre = getNombreSession(req)
  req.session.destroy( err => {
    if(!err) res.send(`Hasta luego ${nombre}`)
    else res.send({error: 'olvidar', body: err})
  })
})

const PORT = 3000
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
