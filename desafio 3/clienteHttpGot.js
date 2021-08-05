const got = require('got')

const url = 'http://localhost:8080/egreso'

const pedirNumeros = () => {
  got(url, { responseType: 'json' })
    .then(response => {
      // Obtenemos los datos
      const { numeros } = response.body
      console.log(numeros);
    })
    .catch(error => {
      console.log(error)
    })
}

setInterval(pedirNumeros, 10000)
