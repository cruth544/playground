let methods = {
	print: (...messages) => {
		console.log(...messages)
		methods.space()
	},
	println: (...messages) => {
		messages.forEach((m) => {
			console.log(m)
		})
	},
	log: (head, ...letters) => {
		console.log(head)
		if (letters.length > 1) {
			let alphabet = 'abcdefghijklmnopqrstuvwxyz'
			letters.forEach((l, i) => {
				console.log(`${alphabet[i]}: `, l)
			})
		} else {
			let objToPrint = JSON.stringify(letters[0]);
			objToPrint = objToPrint.replace(/\{\s?|\s?\}/g, '')
														 .replace(/^"/g, '')
														 .replace(/,(?=")/g, '\n')
														 .replace(/\n"/g, '\n')
														 .replace(/"(?=:)/g, '')
														 .replace(/:/g, ': ')

			console.log(objToPrint)
			// for(let key in letters[0]) {
			// 	console.log(`${key}: ${letters[0][key].toString()}`)
			// }
		}
		methods.space()
	},
	space: () => {
		console.log('')
	}
}
module.exports = methods
