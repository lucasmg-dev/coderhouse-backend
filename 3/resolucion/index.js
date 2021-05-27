import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
  nota: Number,
  ingreso: Boolean    // *********** agregado al Schema **************
})
const estudiantesDAO = mongoose.model('estudiantes', estudianteSchema)

try {
  /* ------------------------------------------------------------------ */
  /*               Conexión a la base de datos : colegio                */
  /* ------------------------------------------------------------------ */
  let rta = await mongoose.connect('mongodb://localhost/colegio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  console.log('Base de datos conectada')

  try {

    //----------------------------------------------------------------------------
    console.log('\n1) Actualizar el dni del estudiante Lucas Blanco a 20355875')
    //----------------------------------------------------------------------------
    rta = await estudiantesDAO.updateOne(
      {
        nombre: 'Lucas',
        apellido: 'Blanco'
      },
      { dni: 20355875 }
    )
    console.log(rta)



    //----------------------------------------------------------------------------
    console.log(`\n2) Agregar un campo 'ingreso' a todos los documentos con el valor false`)
    //----------------------------------------------------------------------------
    rta = await estudiantesDAO.updateMany(
      {}, { ingreso: false }
    )
    console.log(rta)



    //----------------------------------------------------------------------------
    console.log(`\n3) Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A`)
    //----------------------------------------------------------------------------
    rta = await estudiantesDAO.updateMany(
      { curso: '1A' }, { ingreso: true }
    )
    console.log(rta)



    //----------------------------------------------------------------------------
    console.log(`\n4) Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v`)
    //----------------------------------------------------------------------------
    const estudiantesAprobados = await estudiantesDAO.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 })
    estudiantesAprobados.forEach(estAprob => {
      console.log(JSON.stringify(estAprob))
    })



    //----------------------------------------------------------------------------
    console.log(`\n5) Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v`)
    //----------------------------------------------------------------------------
    const estudiantesIngresantes = await estudiantesDAO.find({ ingreso: true }, { _id: 0, __v: 0 })
    estudiantesIngresantes.forEach(estIngres => {
      console.log(JSON.stringify(estIngres))
    })



    //----------------------------------------------------------------------------
    console.log(`\n6) Borrar de la colección de estudiantes, los documentos cuyo campo 'ingreso' esté en true`)
    //----------------------------------------------------------------------------
    rta = await estudiantesDAO.deleteMany({ ingreso: true })
    console.log(rta)


    //----------------------------------------------------------------------------
    console.log(`\n7) Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) y su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS`)
    //----------------------------------------------------------------------------
    let estudiantes = await estudiantesDAO.find({}, { __v: 0 })
    estudiantes.forEach(estudiante => {
      console.log(
        JSON.stringify(estudiante),
        '-> Fecha creación: ',
        new Date(estudiante._id.getTimestamp()).toLocaleString()
      )
    })
  } catch (err) {
    console.log(`Error en proceso de base de datos ${err}`)
  } finally {
    await mongoose.disconnect()
  }
} catch (err) {
  console.log(`Error de conexión a la base de datos ${err}`)
}
