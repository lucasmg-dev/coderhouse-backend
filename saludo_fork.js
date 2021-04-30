process.on("message", name => {
	console.log(`Hola ${name}`)
	process.exit()
})
