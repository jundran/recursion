// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6
function sumToLoop (n) {
	let sum = n
	for (let i = --n; i > 0; i--) {
		sum += i
	}
	return sum
}

// n + sumTo(n-1) for n > 1
function sumToRecursion (n) {
	if(n === 1) return n
	return n + sumToRecursion(n - 1)
}

// n * (n+1) / 2 -- Arithmetic Progression / Sequence
function sumToAP (n) {
	return n * (n+1) / 2
}

function calculationExecutionTime (fn, ...args) {
	const now = Date.now()
	console.log(fn(...args), 'Time:', Date.now() - now)
}

// Watch for recursion -- RangeError: Maximum call stack size exceeded
console.log(sumToRecursion(3))
calculationExecutionTime(sumToLoop, 10000)
calculationExecutionTime(sumToRecursion, 10000)
calculationExecutionTime(sumToAP, 10000)
