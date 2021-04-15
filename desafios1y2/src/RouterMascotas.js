import express from 'express'

let nextIdMascota = 0
const mascotas = []

function crearRouterMascotas() {
  const routerMascotas = express.Router()
  routerMascotas.use(express.json())

  routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
  })

  routerMascotas.post('/', (req, res) => {
    const mascotaNueva = req.body
    mascotaNueva.id = nextIdMascota++
    mascotas.push(mascotaNueva)
    res.json(mascotaNueva)
  })

  return routerMascotas
}

export { crearRouterMascotas }