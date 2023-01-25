// Write a function that sums squares of numbers in list that may contain more lists
function sumSquares(array) {
	let total = 0
	for(item of array) {
		// console.log(item)
		if(Array.isArray(item)) total += sumSquares(item)
		else if(Number.isInteger(item)) total += item * item
	}
	return total
}

console.log('Result:', sumSquares([1,2,3])) // 1 + 4 + 9 = 14
console.log('Result:', sumSquares([[1,2],3])) // 1 + 4 + 9 = 14
console.log('Result:', sumSquares([[[[[[[[[1]]]]]]]]])) // 1 = 1
console.log('Result:', sumSquares([10,[[10],10],[10]])) // 100 + 100 + 100 + 100 = 400
