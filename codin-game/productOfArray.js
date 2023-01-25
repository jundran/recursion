// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(array) {
	if(!array.length) return 1
	return array.shift() * productOfArray(array)
}

console.log(productOfArray([2])) // 2
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

/*
1 * 60
^
2 * 30
^
3 * 10
^
10 * 1
^
if(!array.length) return 1
*/
