import express from 'express'
import faker from 'faker'
faker.locale = 'es'


function generarUsuario() {
  return {
    nombre: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.avatar(),
  }
}

const app = express()

class MockAPI {
  constructor() {
    this.usuarios = usuarios = []
  }

  popular(n = 50) {
    for (let i = 0; i < n; i++) {
      this.usuarios.push(generarUsuario())
    }
  }

  agregar(usuario) {
    this.usuarios.push(usuario)
  }
  obtenerTodos() {
    return [...this.usuarios]
  }
  obtenerPorId(id) {
    return this.usuarios.find(u => u.id === id)
  }
  actualizar(id, campos) {
    const index = this.usuarios.findIndex(u => u.id === id)
    if (index === -1) {
      // no lo encontré
    } else {
      const usuActualizado = { ...this.usuarios[index], ...campos }
      this.usuarios[index] = usuActualizado
    }
  }
  borrar(id) {
    const index = this.usuarios.findIndex(u => u.id === id)
    if (index === -1) {
      // no lo encontré
    } else {
      this.usuarios.splice(index, 1)
    }
  }
}

app.use(express.json())

const api = new MockAPI()

app.get('/api/usuarios/:id?', (req, res) => {
  if (req.params.id) {
    res.json(api.obtenerPorId(req.params.id))
  } else {
    res.json(api.obtenerTodos())
  }
})

app.post('/api/usuarios', (req, res) => {
  res.json([1, 2, 3])
})

app.put('/api/usuarios', (req, res) => {
  res.json([1, 2, 3])
})

app.delete('/api/usuarios', (req, res) => {
  res.json([1, 2, 3])
})

const server = app.listen(8080, () => {
  console.log(`escuchando en ${server.address().port}`)
})