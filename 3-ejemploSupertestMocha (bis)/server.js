const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

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

/* ---------------------------------------------------- */
/*                   Ruta GET: params                   */
/* ---------------------------------------------------- */
app.get('/datos/:nombre?/:edad?', (req, res) => {
    const { url, method } = req
    const { nombre, edad } = req.params
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
    const { id } = req.params

    const query = id ? { _id: id } : {}
    model.usuario.find(query, (err, usuarios) => {
        if (err) throw new Error(`error en lectura de usuarios: ${err}`)
        // usuarios.forEach(usuario => {
        //     console.log(usuario)
        // })
        res.send(usuarios)
    })
})
/* ---------------------------------------------------- */
/*     Definición de rutas POST  (Enviar información)   */
/* ---------------------------------------------------- */
router.post('/', (req, res) => {
    const usuario = req.body

    const val = validaciones.validar(usuario)
    if (val.result) {
        const usuarioNuevo = new model.usuario(usuario)
        usuarioNuevo.save(err => {
            if (err) throw new Error(`error en escritura de usuario: ${err}`)
            // console.log('Usuario incorporado')
            //res.send({...usuario, nombre: 'Juan'}) //Para causar error de test en post
            res.send(usuario)
        })
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
        const rta = await model.usuario.updateOne({ _id: id }, { $set: usuario })
        res.send(rta)
    } else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas DELETE (Eliminar información)  */
/* ---------------------------------------------------- */
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const rta = await model.usuario.deleteOne({ _id: id },)
    res.send(rta)
})
//----------------------------------------------------------------

app.use('/api', router)

module.exports = app
