function isPalindrome (n) {
	const numString = n.toString()
	const index = Math.floor(numString.length / 2)
	const left = numString.slice(0, index)
	const right = numString.slice(index).split('').reverse().join('')
	return left === right
}

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
function largestPalindromeProductLoop (numDigits) {
 	const maxFactor = Math.pow(10, numDigits) - 1
	const lowestFactor = (maxFactor + 1) / 10
	let largest = 0

	for (let i = lowestFactor; i <= maxFactor; i++) {
		for (let j = lowestFactor; j <= maxFactor; j++) {
			const product = i * j
			if(isPalindrome(product) && product > largest) {
				largest = product
			}
		}
	}

	return largest
}

console.log('Answer:', largestPalindromeProductLoop(2)) // 9009
console.log('Answer:', largestPalindromeProductLoop(3)) // 906609
