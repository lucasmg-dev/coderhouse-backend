const http = require('http')

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET'
}

const req = http.request(options, res => {
  let response = ''

  res.on('data', d => {
    //process.stdout.write(d)
    response += d
  })

  res.on('end', () => {
    const fyh = JSON.parse(response)
    console.log(fyh);
  });
})

req.on('error', error => {
  console.error(error)
})

req.end()