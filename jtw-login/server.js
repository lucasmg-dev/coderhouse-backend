const express = require('express')
const exphbs  = require('express-handlebars');
const jwt = require('./jwt')

let usuarios = []

const app = express()

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout:'main.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


/* --------- LOGIN ---------- */
app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/login', (req,res) => {
    let { nombre, password } = req.body
    let usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if(usuario) {
        let credencialesOk = usuario.nombre==nombre && usuario.password==password
        if(credencialesOk) {
            usuario.contador = 0
            const token = jwt.generateAuthToken(nombre);
            res.header("x-auth-token", token).send({
                nombre: nombre
            });
        }
        else {
            res.json({error: 'error user login'});
        }
    }
    else {
        res.json({error: 'error user login'});
    }
})

app.get('/login-error', (req,res) => {
    res.render('login-error',{});
})

/* --------- REGISTER ---------- */
app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/public/register.html')
})

app.post('/register', (req,res) => {
    let { nombre } = req.body
    let usuario = usuarios.find(usuario => usuario.nombre == nombre)
    if(!usuario) {
        let user = req.body
        if(!user.contador) user.contador = 0
        usuarios.push(req.body)
        const token = jwt.generateAuthToken(nombre);
        res.header("x-auth-token", token).send({
            nombre: nombre
        });
    }
    else {
        res.json({error: 'error user register'});
    }
})

app.get('/register-error', (req,res) => {
    res.render('register-error',{});
})


/* --------- DATOS ---------- */
app.get('/datos', jwt.auth, (req,res) => {
    let usuario = usuarios.find(usuario => usuario.nombre == req.user.nombre)
    if(usuario) {
        usuario.contador++
        //console.log('/datos', req.user)
        res.render('datos',{
            datos: usuario,
            contador: usuario.contador
        });
    }
    else {
        res.render('user-error',{});
    }
})

app.get('/token-error', (req,res) => {
    res.render('token-error',{});
})


/* --------- LOGOUT ---------- */
app.get('/logout', (req,res) => {
    res.redirect('/')
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
