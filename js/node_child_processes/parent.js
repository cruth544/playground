const { print, println, log, space } = require('./helpers')

const fork = require('child_process').fork
let child = fork(`${__dirname}/child.js`)
child.send({ object: 'this is an object', num: 1 })

child.on('message', (data) => {
	console.log('We received a reply: '+ data)
})

child.on('data', (data) => {
	console.log('There was an error: '+ data)
})


