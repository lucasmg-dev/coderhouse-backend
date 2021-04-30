const { fork } = require('child_process')

p1 = fork('saludo_fork.js')
p1.send("jose")
