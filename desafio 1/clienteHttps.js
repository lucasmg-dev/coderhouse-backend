const https = require('https')
const fs = require('fs')

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/posts',
  method: 'GET'
}

const req = https.request(options, res => {
  let response = ''

  res.on('data', d => {
    // process.stdout.write(d)
    response += d
  })

  res.on('end', () => {
    const posts = JSON.parse(response)
    const archivo = 'postsHttps.json'
    fs.writeFile(archivo, JSON.stringify(posts, null, '\t'), error => {
      if (error) throw new Error(`Error de escritura de archivo ${archivo}`)
      console.log(`Escritura ok de archivo ${archivo}`)
    })
  });
})

req.on('error', error => {
  console.error(error)
})

req.end()