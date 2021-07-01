// solo para windows (powershell)
// tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
// taskkill /f /pid <pid> -> mata un proceso por su número de PID

// A) un proceso para mantener la terminal abierta monitoreando el cluster
// B) un proceso para el cluster
// C) n procesos, uno para cada fork del cluster

// si matamos A) se cierra el proceso en la terminal, pero el cluster y sus procesos siguen activos
// si matamos B) se cierra el cluster y con él todos sus procesos
// si matamos Cn) se cierra ese proceso, y el cluster abre uno nuevo, con un nuevo pid

// https://nodejs.org/dist/latest-v14.x/docs/api/cluster.html

const express = require('express')
const cluster = require('cluster')

/* --------------------------------------------------------------------------- */
/* MASTER */
if (cluster.isMaster) {

    const numCPUs = require('os').cpus().length

    console.log(numCPUs)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
/* --------------------------------------------------------------------------- */
/* WORKERS */
else {
    const app = express()

    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
