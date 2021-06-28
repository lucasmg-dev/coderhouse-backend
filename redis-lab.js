const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const RedisStore = require('connect-redis')(session)


const redis = require('redis')

const client = redis.createClient(port,'URL')

client.auth('', (err) => {
  if (err) throw err;
});
/* ----------------------------------------------------- */

const app = express()
app.use(cookieParser())
app.use(session({
  store: new RedisStore({
    client: client,
    ttl: 300
  }),
  /* ----------------------------------------------------- */

  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req,res) => {
  res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req,res) => {
  res.send({ contador: ++contador })
})

app.get('/con-session', (req,res) => {
  if(req.session.contador) {
    req.session.contador++
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
  }
  else {
    req.session.contador = 1
    res.send('Bienvenido!')
  }
})

app.get('/logout', (req,res) => {
  req.session.destroy( err => {
    if(!err) res.send('Logout ok!')
    else res.send({status: 'Logout ERROR', body: err})
  })
})

app.get('/info', (req,res) => {
  console.log('------------ req.session -------------')
  console.log(req.session)
  console.log('--------------------------------------')

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)
  console.log('--------------------------------------')

  console.log('----------- req.cookies ------------')
  console.log(req.cookies)
  console.log('--------------------------------------')

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
  console.log('--------------------------------------')

  res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

