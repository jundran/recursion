// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
function largestPrimeFactor (n) {
	console.log('N is:', n)
	if (isPrime(n)) return n
	// n divided by its smallest prime factor returns a smaller number that has the same largest prime factor. This allows for an efficient recursive solution, especially when the initial n is very large.
	return largestPrimeFactor(n / smallestPrimeFactor(n))
}

function smallestPrimeFactor (n) {
	if (isPrime(n)) return null // not needed but included for completion
	for (let i = 2; ; i++) {
		if ((isFactor(i, n) && isPrime(i))) return i
	}
}

function isPrime (n) {
	if (n < 2) return false
	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false
	}
	return true
}

function isFactor (i, n) {
	if (n % i === 0) return true
	else return false
}

// https://www.wolframalpha.com/input?i=600851475143+prime+factors
console.log('Answer:', largestPrimeFactor(13195), '\n')
console.log('Answer:', largestPrimeFactor(600851475143), '\n')
console.log('Answer:', largestPrimeFactor(999999999999999))
