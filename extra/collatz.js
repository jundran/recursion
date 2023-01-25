// Return number of steps to solve
function collatz (n, steps = 0) {
	if(n === 1) {
		return steps
	}
	else if (n % 2 === 0) {
		return collatz(n / 2, ++steps)
	}	else {
		return collatz(3 * n + 1, ++steps)
	}
}

console.log(collatz(1))
console.log(collatz(2))
console.log(collatz(3))
console.log(collatz(4))
console.log(collatz(5))
console.log(collatz(6))
console.log(collatz(7))
console.log(collatz(8))
console.log(collatz(15))
console.log(collatz(27))
console.log(collatz(50))
