require('http').createServer((req,res) => {
    res.writeHead(200, {'content-type':'application/json'})
    res.end(JSON.stringify({FyH: new Date().toLocaleString()}))
}).listen(8080, () => console.log(`Servidor escuchando en el puerto 8080`))

