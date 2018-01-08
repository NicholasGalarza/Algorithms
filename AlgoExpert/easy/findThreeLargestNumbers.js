// Runtime O(nm) | O(1) space
function findThreeLargestNumbers(array) {

	let three = Array(3).fill(-Infinity)
	
	for (let current of array) {
		// if current is bigger than the current smallest
		// big value inside the three result, current is 
		// shiftworthy. Slight optimization.
		if (current > three[0]) {
			threeShifter(current, three)
		}
	}
	return three
}

function threeShifter(current, three) {
	let insert = current
	for (let i = three.length; i >= 0; i--) {
		if (current > three[i]) {
			let temp = three[i]
			three[i] = insert
			insert = temp
		}
	}
}