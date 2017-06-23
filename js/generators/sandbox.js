const { print, println, log, space } = require('./helpers')

const dataStr = require('./data')
const lines = dataStr.split('\n')
const data = lines.map(str => str.split(', '))

/* Sort locations by user */
const listByUser = arr => arr.reduce((map, [user, location]) => {
	if (map.has(user)) {
		map.get(user).push(location)
	} else {
		map.set(user, [location])
	}
	return map
}, new Map())

const locationsByUser = listByUser(data)

/* Convert locations to transitions */
const slicesOf = (sliceSize, array) => {
	const emptyArray = Array(array.length - sliceSize + 1).fill()
	return emptyArray.map((_, i) => array.slice(i, i + sliceSize))
}
const transitions = list => slicesOf(2, list)

const mapValues = (fn , inMap) => Array.from(inMap.entries()).reduce(
	(outMap, [key, value]) => {
		outMap.set(key, fn(value))
		return outMap
	}, new Map())

const transitionize = mapValues.bind(null, transitions)
const transitionsByUser = transitionize(locationsByUser)

const reduceValues = (mergeFn, inMap) => Array.from(inMap.entries())
																							.map(([key, value]) => value)
																							.reduce(mergeFn)

const concatValues = reduceValues.bind(null, (a, b) => a.concat(b))
const allTransitions = concatValues(transitionsByUser)

const stringifyTransition = transition => transition.join(' => ')
const stringifyAllTransitions = arr => arr.map(stringifyTransition)

const stringTransitions = stringifyAllTransitions(allTransitions)

const countTransitions = arr => arr.reduce(
	(transitionsToCounts, transitionKey) => {
		if (transitionsToCounts.has(transitionKey)) {
			transitionsToCounts.set(transitionKey, transitionsToCounts.get(transitionKey) + 1)
		} else {
			transitionsToCounts.set(transitionKey, 1)
		}
		return transitionsToCounts
	}, new Map())
const counts = countTransitions(stringTransitions)

const greatestValue = inMap => Array.from(inMap.entries()).reduce(
	([wasKeys, wasCount], [transitionKey]))

print(counts)
