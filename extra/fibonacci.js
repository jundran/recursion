// Fn = Fn-1 + Fn-2
function fibonacci (n) {
	if (n < 2) return n
	let round = fibonacci(n - 1) + fibonacci(n - 2)
	// console.log(round)
	return round
}

function fibonacciLoop (n) {
	let a = 1
	let b = 1
	for (let i = 2; i < n; i++) {
		let c = a + b
		a = b
		b = c
		// console.log(c)
	}
	return b
}

console.log('Result:', fibonacci(1))
console.log('Result:', fibonacci(2))
console.log('Result:', fibonacci(3))
console.log('Result:', fibonacci(4))
console.log('Result:', fibonacci(10))
console.log()
console.log('Result:', fibonacciLoop(1))
console.log('Result:', fibonacciLoop(2))
console.log('Result:', fibonacciLoop(3))
console.log('Result:', fibonacciLoop(4))
console.log('Result:', fibonacciLoop(77)) // 5527939700884757
