const spawn = require('child_process').spawn
let child = spawn('node', ['child.js'])
child.stdin.write("hello world")

child.stdout.on('data', (data) => {
	console.log('We received a reply: '+ data)
})

child.stderr.on('data', (data) => {
	console.log('There was an error: '+ data)
})

