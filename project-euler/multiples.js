// Find the sum of all multiples of 3 or 5 below 1000.
// ie. multiples(10) = 3, 5, 6 and 9 = 23
function multiples (n, sum = 0) {
	if(--n < 3) return sum

	if(n % 3 === 0 || n % 5 === 0) {
		sum += n
	}

	return multiples(n, sum)
}

console.log(multiples(10)) // 23
console.log(multiples(1000)) // 233168
