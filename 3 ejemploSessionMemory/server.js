const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

function showSession(req) {
  console.log('------------ req.session -------------')
  console.log(req.session)

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)

  console.log('----------- req.cookies ------------')
  console.log(req.cookies)

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
}

const app = express()

app.use(cookieParser())

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req, res) => {
  res.json({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
  showSession(req)
  if (!req.session.contador) {
    req.session.contador = 1
    res.send('Bienvenido!')
  } else {
    req.session.contador++
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})

app.get('/info', (req, res) => {
  showSession(req)
  res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
