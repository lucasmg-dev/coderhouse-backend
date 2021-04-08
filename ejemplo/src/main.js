// import moment from 'moment'

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

//////////////////////////////////////////////////////////////////////////////////////

// import express from 'express'

// const app = express()

// app.get('/personas', (req, res) => {
//   res.json([{ nombre: 'mariano' }, { nombre: 'solange' }])
// })

// app.get('/tutores', (req, res) => {
//   res.json([{ nombre: 'sebas' }, { nombre: 'rafael' }])
// })

// app.get('/', (req, res) => {
//   res.send('<html><h1>HOLA!</h1></html>')
// })

// const PORT = 8080

// const server = app.listen(PORT, () => {
//   console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
// })

// server.on('error', (error) => { console.log(`error: ${error.message}`) })

//////////////////////////////////////////////////////////////////////////////////////

import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let visitas = 0
app.get('/visitas', (req,res) => {
    res.send(`La cantidad de visitas es ${++visitas}`)
})

app.get('/fyh', (req,res) => {
    res.json({fyh: new Date().toLocaleString()})
})

const PORT = 0

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
