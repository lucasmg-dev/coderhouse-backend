const mongoose = require('mongoose')
const app = require('./server')

/* ---------------------------------------------------------------------------------- */
/* Conexión a MongoDB */
mongoose.connect('mongodb://localhost/mibase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Base de datos conectada!')
    /* ----------- app.listen : pone en marcha el listen del servidor ------------------ */
    const PORT = process.env.PORT || 8080
    const server = app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
    })
    server.on('error', error => console.log(`Error en Servidor: ${error}`))
}).catch(err => {
    throw new Error(`Error de conexión en la base de datos: ${err}`)
})