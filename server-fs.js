import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"

//const express = require('express')
//const cookieParser = require('cookie-parser')
//const session = require('express-session')

import FileStore from "session-file-store"

const Client = FileStore(session)

const app = express()
app.use(cookieParser())
app.use(session({
  store: new Client({
    path: './sesiones',
    ttl: 300,
    retries: 0
  }),
  secret: 'shhh'
}))

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

app.listen(3000)
