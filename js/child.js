process.stdin.resume()

process.stdin.on('data', (data) => {
	console.log('Received data: '+ data)
})

