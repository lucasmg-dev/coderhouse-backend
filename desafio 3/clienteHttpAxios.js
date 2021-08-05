const axios = require('axios')

const url = 'http://localhost:8080/ingreso'

const enviarNumeros = () => {
  axios.post(url, { numero: Math.random() })
    .then(response => {
      // Obtenemos los datos
      console.log(response.data);
    })
    .catch(error => {
      console.log(error)
    })
}

setInterval(enviarNumeros, 2000)
