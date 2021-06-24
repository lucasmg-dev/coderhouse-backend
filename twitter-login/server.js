const express = require('express')
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser')
const session = require('express-session')

/* ------------------ PASSPORT -------------------- */
const passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

const TWITTER_CLIENT_KEY = 'XXXXXXXXXXXXXXXXXXXXXXX';
const TWITTER_CLIENT_SECRET = 'XXXXXXXXXXXXXXXXXXXXXXX';

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CLIENT_KEY,
    consumerSecret: TWITTER_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/twitter/callback',
}, function (token, tokenSecret, userProfile, done) {

    console.log(userProfile)
    return done(null, userProfile);
}));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
/* ------------------------------------------------ */

const app = express()
app.use(cookieParser())
app.use(session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

/* ------------------ PASSPORT -------------------- */
app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------------------ */
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

/* --------- LOGIN ---------- */
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin'
}));

app.get('/faillogin', (req, res) => {
    res.render('login-error', {});
})

/* --------- DATOS ---------- */
app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        //reinicio contador
        if (!req.user.contador) req.user.contador = 0
        req.user.contador++
        console.dir(req.user)
        res.render('datos', {
            nombre: req.user.displayName,
            username: req.user.username,
            foto: req.user.photos[0].value,
            contador: req.user.contador
        });
    } else {
        res.redirect('/login')
    }
})

/* --------- LOGOUT ---------- */
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/')
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
