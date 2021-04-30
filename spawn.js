const { spawn } = require('child_process')

const child = spawn('find', ['.'])

child.stdout.on('data', data => {
	console.log('stdout', data.toString())
})

child.stderr.on('data', err => {
	console.log('stderr', err.toString())
})
