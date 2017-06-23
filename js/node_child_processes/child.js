const { print, println, log, space } = require('./helpers')

// process.stdin.resume()

process.on('message', (data) => {
	let sum = data.num
	for (let i = 0; i < 10; i++) {
		sum += i
	}
	process.send(sum)
})

// process.stdout.on('data', (data) => {
// 	print('Sending data: ' + data)
// })
