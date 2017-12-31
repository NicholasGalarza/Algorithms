/* Bubble Sort
 * Goal
 * Sort in ascending order by iterating
 * over the array & perform swaps each time a 
 * current number is less than the next number.
 * 
 * Runtime
 * Best: O(n) - All elements are already sorted.
 * Averge: O(n^2) - Some mis-aligned elements.
 * Worst: O(n^2) - Elements are in reverse-sorted order.
 */

function bubbleSort(array) {
	// Write your code here.
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j <= array.length - i; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	return array
}

//console.log(bubbleSort([3, 5, -1, 8, 2, 4])) // [-1, 2, 3, 4, 5, 8]
//console.log(bubbleSort([8, 9, 7, 5, 2, 3, 2, 5, 1])) // [1, 2, 3, 5, 5, 7, 8, 9]

