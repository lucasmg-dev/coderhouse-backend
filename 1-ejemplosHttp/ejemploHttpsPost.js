const http = require('http')

const data = JSON.stringify({
    todo: 'buy food'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.log(error)
})

req.write(data)

req.end()