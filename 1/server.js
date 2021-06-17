const express = require('express')
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')
const session = require('express-session')

/******************  DATABASE  ******************/

const usuarios = []

/******************  SERVER  ******************/

const app = express()

/******************  MIDDLEWARES  ******************/

app.use(cookieParser())

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000
  }
}))

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

/******************  ROUTES  ******************/

// REGISTER
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req, res) => {

  const { nombre, password, direccion } = req.body

  const usuario = usuarios.find(usuario => usuario.nombre == nombre)
  if (usuario) {
    return res.render('register-error', {});
  }

  usuarios.push({ nombre, password, direccion })
  res.redirect('/login')
})

// LOGIN
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req, res) => {

  const { nombre, password } = req.body

  const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)
  if (!usuario) {
    return res.render('login-error', {});
  }

  req.session.nombre = nombre
  req.session.contador = 0
  res.redirect('/datos')
})

// DATOS
app.get('/datos', (req, res) => {
  if (req.session.nombre) {
    req.session.contador++
    res.render('datos', {
      datos: usuarios.find(usuario => usuario.nombre == req.session.nombre),
      contador: req.session.contador
    });
  } else {
    res.redirect('/login')
  }
})

// LOGOUT
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login')
  })
})

// INICIO
app.get('/', (req, res) => {
  if (req.session.nombre) {
    res.redirect('/datos')
  } else {
    res.redirect('/login')
  }
})

/******************  LISTEN  ******************/

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
