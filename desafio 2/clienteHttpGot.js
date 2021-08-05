const got = require('got')

const url = 'http://localhost:8080'

got(url, { responseType: 'json' })
  .then(response => {
    // Obtenemos los datos
    const fyh = response.body
    console.log(fyh);
  })
  .catch(error => {
    console.log(error)
  })
