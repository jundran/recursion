function fibs (n) {
	const array = [0, 1]

	// Edge case
	if(n < 2) return array.slice(0, n)

	for (let i = 2; i < n; i++) {
		array.push(array[i-2] + array[i-1])
	}
	return array
}

// Project requirements: Using an example input of 8,
// this method should return the array [0, 1, 1, 2, 3, 5, 8, 13]
console.log('0:', fibs(0))
console.log('1:', fibs(1))
console.log('2:', fibs(2))
console.log('3:', fibs(3))
console.log('4:', fibs(4))
console.log('5:', fibs(5))
console.log('6:', fibs(6))
console.log('7:', fibs(7))
console.log('8:', fibs(8))
