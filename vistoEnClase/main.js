const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/ecommerce'

const esquemaUsuario = new mongoose.Schema({
  nombre: { type: String, require: true, max: 100 },
  apellido: { type: String, require: true, max: 100 },
  email: { type: String, require: true, max: 100 },
  usuario: { type: String, require: true, max: 100 },
  contrasenia: { type: Number, require: true }
})

const daoUsuarios = mongoose.model('Usuario', esquemaUsuario)

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('conectado a la base')

    daoUsuarios.create({
      nombre: 'mariano',
      apellido: 'aquino',
      email: 'mariano@aquino.com',
      usuario: 'usuario',
      contrasenia: 123456
    }, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)

        daoUsuarios.find({}, (err, res) => {
          if (err) {
            console.log(err)
          } else {
            console.log(res)
          }
          mongoose.disconnect(err => { console.log('desconectado de la base') })
        })
      }
    })
  }
})