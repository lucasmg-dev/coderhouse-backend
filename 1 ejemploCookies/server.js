const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
// app.use(cookieParser('my-secret'))
// app.use(cookieParser(['my-secret', 'another-secret']))

app.use((req, res, next) => {
  console.dir(req.cookies)
  console.dir(req.signedCookies)
  next()
})

app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})

app.get('/set', (req, res) => {
  res.cookie('regular', 'cookie')
  res.send('Set Cookie')
})

app.get('/setJSON', (req, res) => {
  res.cookie('json', { tipo: 'cookie', nombre: 'cuqui' })
  res.send('Set Json Cookie')
})

app.get('/setEX', (req, res) => {
  res.cookie('expirable', 'cookie', { maxAge: 30000 })
  res.send('Set Exp Cookie')
})

app.get('/setSigned', (req, res) => {
  res.cookie('signed', 'cookie', { signed: true })
  res.send('Set Signed Cookie')
})

app.get('/get/:nombre', (req, res) => {
  const cookieName = req.params.nombre
  const jsonCookie = req.cookies[cookieName]
  res.json(jsonCookie)
})

app.get('/get', (req, res) => {
  res.json({ notSigned: req.cookies, signed: req.signedCookies })
})

app.get('/clr', (req, res) => {
  for (const cookieName of Object.keys(req.cookies)) {
    res.clearCookie(cookieName)
  }
  for (const cookieName of Object.keys(req.signedCookies)) {
    res.clearCookie(cookieName)
  }
  res.send('Clear Cookies')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
