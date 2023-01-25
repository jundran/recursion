// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function smallestMultipleLoop (n) {
	let divisible
	for (let i = n;; i++) {
		for (let j = 1; j <= n; j++) {
			if (i % j === 0) {
				divisible = i
			} else {
				divisible = null
				break
			}
		}
		if (divisible) break
	}
	return divisible
}

console.log('Loop:', smallestMultipleLoop(10)) // 2520
console.log('Loop:', smallestMultipleLoop(20)) // 232792560
