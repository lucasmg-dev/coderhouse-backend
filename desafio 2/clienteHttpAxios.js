const axios = require('axios')

const url = 'http://localhost:8080'

axios(url)
  .then(response => {
    // Obtenemos los datos
    const fyh = response.data
    console.log(fyh);
  })
  .catch(error => {
    console.log(error)
  })
