const mongoose = require('mongoose')
const Schema = mongoose.Schema

const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
]

/* --------------------------------------------------------------------- */
/*  Definición del esquema de documento y del modelo                     */
/*  (para poder interactuar con la base de datos: leer, escribir, etc)   */
/* --------------------------------------------------------------------- */
const estudianteSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    dni: {
        type: String, unique: true
    },
    curso: String,
    nota: Number
})
const EstudiantesDAO = mongoose.model('estudiantes', estudianteSchema)

/* ------------------------------------------------------------------ */
/*               Conexión a la base de datos : colegio                */
/* ------------------------------------------------------------------ */
mongoose.connect('mongodb://localhost/colegio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, err => {
    if (err) throw new Error(`Error de conexión a la base de datos ${err}`)
    console.log('Base de datos conectada')

    /* ------------------------------------------------------------------- */
    /*   Escritura de la base de datos: colegio, collection: estudiantes   */
    /* ------------------------------------------------------------------- */
    let doneCount = 0
    const errs = []

    for (const estudiante of estudiantes) {
        EstudiantesDAO.create(estudiante, err => {
            if (err) {
                errs.push(err)
            } else {
                console.log('Escritura Ok!')
            }
            doneCount++
            chequeoFinal(doneCount, errs, estudiantes)
        })
    }
})

function chequeoFinal(doneCount, errs, estudiantes) {
    if (doneCount === estudiantes.length) {
        mongoose.disconnect(err => {
            if (errs.length > 0) {
                throw new Error(`Error en ${errs.length} escrituras`)
            }
            if (err) {
                console.log('error al desconectarse de la base de datos')
            } else {
                console.log('Base de datos desconectada')
            }
        })
    }
}
