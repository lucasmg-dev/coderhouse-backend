const http = require('http')

const getSaludoSegunHoraActual = () => {
    const hora = new Date().getHours()

    if (hora >= 6 && hora <= 12) {
        return 'Buenos dias!'
    } else if (hora >= 13 && hora <= 19) {
        return 'Buenas tardes!'
    } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        return 'Buenas noches!'
    }
}

function manejadorDePeticiones(req, res) {
    res.end(getSaludoSegunHoraActual())
}

const app = http.createServer(manejadorDePeticiones)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})
