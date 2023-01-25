let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList (list) {
	console.log(list.value)
	if (list.next) printList(list.next)
}

function printListLoop (list) {
	while (list) {
		console.log(list.value)
		list = list.next
	}
}

function printListReverse (list) {
	if (list.next) printListReverse(list.next)
	console.log(list.value)
}

function printListLoopReverse (list) {
	const values = []
	while (list) {
		values.push(list.value)
		list = list.next
	}
	for (let i = values.length - 1; i >= 0; i--) {
		console.log(values[i])
	}
}

printList(list)
console.log()
printListLoop(list)
console.log()
printListReverse(list)
console.log()
printListLoopReverse(list)
