const express = require('express')
const router = express.Router()

const util = require('./util/usuarios')
const validaciones = require('./validaciones/usuarios')
const model = require('./model/usuarios')

/* ------------ INSTANCIA 1 DE SERVIDOR --------------- */
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Middleware custom */
app.use((req, res, next) => {
    next()
})


let usuarios = []

/* ---------------------------------------------------- */
/*                   Ruta GET: params                   */
/* ---------------------------------------------------- */
app.get('/datos/:nombre?/:edad?', (req, res) => {
    let { url, method } = req
    let { nombre, edad } = req.params  //destructuring object
    res.send(`<h3>Ruta: ${method} - url: ${url} - nombre: ${nombre} - edad: ${edad}</h3>`)
})


/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
/*                     API REST FULL                    */
/* ---------------------------------------------------- */
/* ---------------------------------------------------- */

/* ---------------------------------------------------- */
/*     Definición de rutas GET (Pedir información)      */
/* ---------------------------------------------------- */
router.get('/:id?', (req, res) => {
    let { id } = req.params

    if (id) {
        const index = util.getIndex(id, usuarios)
        const usuario = usuarios[index]
        res.send(usuario)
    }
    else {
        res.send(usuarios)
    }
})
/* ---------------------------------------------------- */
/*     Definición de rutas POST  (Enviar información)   */
/* ---------------------------------------------------- */
router.post('/', (req, res) => {
    const usuario = req.body

    const val = validaciones.validar(usuario)
    if (val.result) {
        usuario.id = util.getNextId(usuarios)
        usuario.timestamp = util.getTimestamp()
        usuario.fyh = util.getFechayHora()
        usuarios.push(usuario)
        res.send(usuario)
    } else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas PUT (Actualizar información)   */
/* ---------------------------------------------------- */
router.put('/:id', async (req, res) => {
    const { id } = req.params

    const usuario = req.body

    const val = validaciones.validar(usuario)
    if (val.result) {
        usuario.timestamp = util.getTimestamp()
        usuario.fyh = util.getFechayHora()

        const index = util.getIndex(id, usuarios)
        if (index != -1) {
            usuario.id = id
            usuarios[index] = usuario
        } else {
            usuario.id = util.getNextId(usuarios)
            usuarios.push(usuario)
        }

        res.send(usuario)
    } else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas DELETE (Eliminar información)  */
/* ---------------------------------------------------- */
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const index = util.getIndex(id, usuarios)
    const usuario = usuarios.splice(index, 1)
    res.send(usuario)
})
//----------------------------------------------------------------

app.use('/api', router)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express (memoria) escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))
