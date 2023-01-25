// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
const nestedObject = {
	data: {
			info: {
					stuff: {
							thing: {
									moreStuff: {
											magicNumber: 44,
											something: 'foo2'
									}
							}
					}
			}
	}
}

function contains(object, value) {
	for(objectValue of Object.values(object)) {
		if (objectValue instanceof Object) {
			return contains(objectValue, value)
		}
		if (objectValue === value) return true
	}
	return false
}

console.log('Result:', contains(nestedObject, 44)) // true
console.log('Result:', contains(nestedObject, "foo")) // false
