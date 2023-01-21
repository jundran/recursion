function merge (a, b) {
	// For logging only
	const aOriginal = a.slice()
	const bOriginal = b.slice()

	const c = []

	while(a.length && b.length) {
		if(a[0] < b[0]) c.push(a.shift())
		else c.push(b.shift())
	}

	// Either a or b is empty
	while(a.length) c.push(a.shift())
	while(b.length) c.push(b.shift())

	console.log(`Merge stage: ${aOriginal} -- ${bOriginal} returns ${c}\n`)
	return c
}

function mergeSort (array) {
	console.log('Split stage:', array)
	if(array.length < 2) return array

	const middle = Math.floor(array.length / 2)
	const left = mergeSort(array.slice(0, middle))
	const right = mergeSort(array.slice(middle))

	return(merge(left, right))
}

console.log('Answer:', mergeSort([8, 1, 4, 9, 2, 7, 6, 3]))

/*
LEFT: 8149
	LEFT-left: 81 > 18
	LEFT-right: 49 > 49
		LEFT-merged: 18 49 > 1489

RIGHT: 2763
	RIGHT-left: 27 > 27
	RIGHT-right: 63 > 36
		RIGHT-merged: 27 63 > 2367

	LEFT-RIGHT: 1489 2367 > 12346789
*/
