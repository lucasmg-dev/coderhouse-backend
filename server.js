import express from 'express'
import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'
import handlebars from 'express-handlebars'

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



let mostrados = 0

const productos = [
  { id: 0, nombre: 'galletitas' },
  { id: 1, nombre: 'flan' },
  { id: 2, nombre: 'torta' },
  { id: 3, nombre: 'empanadas' },
  { id: 4, nombre: 'pizza' },
  { id: 5, nombre: 'harina' },

]

app.get('/productos', (req, res) => {
  res.render('inicio')
})

io.on('connection', socket => {
  console.log('cliente conectado!')
  socket.emit('productos', productos.slice(0, mostrados))

  socket.on('boton', () => {
    socket.emit('productos', productos.slice(0, mostrados))
    mostrados++
  })
})

const PORT = 8080
const server = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
