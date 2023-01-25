// Given a multi-dimensional integer array, return the total number of integers stored inside this array
function totalIntegers (array) {
	let total = 0
	for (item of array) {
		console.log(item)
		if (Array.isArray(item)) total += totalIntegers(item)
		else if(Number.isInteger(item)) total++
	}
	return total
}

console.log(
	'Total:',
	totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])
)
