function merge (l, r) {
	// For logging only
	const left = l.slice()
	const right = r.slice()

	const merged = []

	while(l.length && r.length) {
		if(l[0] < r[0]) merged.push(l.shift())
		else merged.push(r.shift())
	}

	// Either l or r is empty
	while(l.length) merged.push(l.shift())
	while(r.length) merged.push(r.shift())

	console.log(`Merge stage: ${left} -- ${right} returns ${merged}\n`)
	return merged
}

function mergeSort (array) {
	console.log('Split stage:', array)
	if(array.length < 2) return array

	// Divide
	const middle = Math.floor(array.length / 2)
	const left = mergeSort(array.slice(0, middle))
	const right = mergeSort(array.slice(middle))

	// Conquer
	return(merge(left, right))
}

console.log('Answer:', mergeSort([8, 1, 4, 9, 2, 7, 6, 3]))
/*
LEFT: 8149
	LEFT-left: 81 --> 18
	LEFT-right: 49 --> 49
		LEFT-merged: 18 49 --> 1489

RIGHT: 2763
	RIGHT-left: 27 --> 27
	RIGHT-right: 63 --> 36
		RIGHT-merged: 27 63 --> 2367

	LEFT-RIGHT: 1489 2367 --> 12346789
*/
