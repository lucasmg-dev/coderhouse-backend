const supertest = require('supertest')
// const request = supertest('http://localhost:8080')
const mongoose = require('mongoose')

const expect = require('chai').expect
const generador = require('../generador/usuarios')

const app = require('../server')

let usuario = generador.get()
console.log(usuario)

describe('test api rest full', () => {

    before(async () => {
        await mongoose.connect('mongodb://localhost/mibase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    })

    after(async () => {
        await mongoose.connection.close()
    })

    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await supertest(app).get('/api')
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un usuario', async () => {
            let usuario = generador.get()

            let response = await supertest(app).post('/api').send(usuario)
            expect(response.status).to.eql(200)

            const user = response.body
            expect(user).to.include.keys('nombre', 'email')
            expect(user.nombre).to.eql(usuario.nombre)
            expect(user.email).to.eql(usuario.email)
        })
    })
})
