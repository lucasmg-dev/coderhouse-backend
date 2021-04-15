import express from 'express'

let nextIdPersona = 0
const personas = []

function crearRouterPersonas() {
  const routerPersonas = express.Router()
  routerPersonas.use(express.json())

  routerPersonas.get('/', (req, res) => {
    res.json(personas)
  })

  routerPersonas.post('/', (req, res) => {
    const personaNueva = req.body
    personaNueva.id = nextIdPersona++
    personas.push(personaNueva)
    res.json(personaNueva)
  })

  return routerPersonas
}

export { crearRouterPersonas }