// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all (array, callback) {
	if(!array.length) return true

	if (callback(array[0])) return all(array.slice(1), callback)
	else return false
}

const condition = num => num < 7

console.log(all([1,2,9], condition))
console.log(all([1,2,3], condition))
console.log(all([], condition))
