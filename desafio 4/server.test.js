const assert = require('assert')
const axios = require('axios')

const enviarNumero = numero => axios.post('http://localhost:8080/ingreso', { numero })
const recibirNumeros = () => axios('http://localhost:8080/egreso')

describe("Comprobando que el servidor funcione bien", function () {
    it('debería guardar y luego recibir 10 números consecutivos', async function () {
        for (i = 0; i < 10; i++) await enviarNumero(i)

        const { data } = await recibirNumeros()
        const { numeros } = data

        // console.log(numeros, numeros.length)
        assert.strictEqual(numeros.length, 10)
        assert.deepStrictEqual(numeros, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
})
