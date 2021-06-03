import express from 'express'
import faker from 'faker'
faker.locale = 'es'

const app = express()

function crearCombinacionAlAzar(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}

app.get('/test', (req, res) => {
    const cant = Number(req.query.cant) || 10
    res.json(Array.from(Array(cant), (v, i) => crearCombinacionAlAzar(i + 1)))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Servidor Http Mocking escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
