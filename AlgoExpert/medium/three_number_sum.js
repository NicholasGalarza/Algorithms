/* Problem:
 * Write a function that takes an array of unique integers and 
 * a target sum. Find all tuples which add up to the target sum.
 */

// Runtime: O(n^2) time | O(n) space
/* Solution Explanation
 * 1.) sort the array in ascending order O(n^2) time. 
 * 2.) iterate through the sorted loop from left to right.
 *  Keep track of this value and call it currentNum for future
 *  reference.
 * 3.) using a left and right pointer, check if the current 
 *  iterative value, plus the indices of the left and right 
 *  values all add up to the target value. 
 * 4.) Sum the values of currentNum + left + right and they 
 *  will fall into one of three categories:
 *  4.1: Check if the currentNum + left + right all equate 
 *    to the targetSum. If they do, send those three values 
 *    to the resulting array. Also, move the left pointer
 *    one position over to the right and the left pointer 
 *    one position over to the left. 
 *  4.2: If the sum values are all less than the target sum, 
 *    move the left pointer up by one position. 
 *  4.3: If the sum values are greater than the target sum, 
 *    move the right pointer one position to the left.
 */ 
function threeNumberSum(array, targetSum) {
  
  const sortedArray = array.sort((a,b) => a-b), 
    ALENGTH = sortedArray.length
	
	let currentSum = Infinity, 
		result = []
		
	for (let i = 0; i < ALENGTH; i++) {
		let left = i+1,
				right = ALENGTH-1
		
		while (left < right) {
			currentSum = sortedArray[i] + sortedArray[left] + sortedArray[right]
			
			if (currentSum === targetSum) {
				result.push([sortedArray[i], sortedArray[left], sortedArray[right]])
				left++
				right--
			} else if (currentSum < targetSum) {
				left++
			} else {
				right--
			}
		}
	}
	
	return result
}