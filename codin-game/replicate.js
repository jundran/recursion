// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(repetitions, number, array = []) {
	if (repetitions <= 0) return array
	console.log(array, repetitions)
	array.push(number)
	return replicate(repetitions - 1, number, array)
}

function replicate2(repetitions, number) {
	if (repetitions <= 0) return []
	return [number].concat(replicate2(repetitions - 1, number))
}

console.log('Answer:', replicate(3, 5)) // [5, 5, 5]
console.log('Answer:', replicate(1, 69)) // [69]
console.log('Answer:', replicate(-2, 6)) // []

console.log('\nMethod 2:')
console.log('Answer:', replicate2(3, 5)) // [5, 5, 5]
console.log('Answer:', replicate2(1, 69)) // [69]
console.log('Answer:', replicate2(-2, 6)) // []
