import express from 'express'
const app = express()

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

function getRandomElem(arr) {
    return arr[Math.floor(arr.length * Math.random())]
}

function crearCombinacionAlAzar() {
    return {
        nombre: getRandomElem(nombres),
        apellido: getRandomElem(apellidos),
        color: getRandomElem(colores),
    }
}

app.get('/test', (req, res) => {
    const objs = []
    for (let i = 0; i < 10; i++) {
        objs.push(crearCombinacionAlAzar())
    }
    res.json(objs)
    // res.json(Array.from(new Array(10), (v,i) => crearCombinacionAlAzar()))
})

const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log(`Servidor Http Mocking escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
