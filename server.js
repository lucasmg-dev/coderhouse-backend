const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  const objetoResponse = {
    firstName: 'Lucas',
    lastName: 'Gonzalez'
  }
  res.end(JSON.stringify(objetoResponse))
}

const server = http.createServer(requestListener);
server.listen(8080, () => {
    console.log('Servidor listo en el puerto 8080')
});