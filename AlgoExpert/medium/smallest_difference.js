/* Problem: 
 * Given two arrays, find the smallest difference of 
 * numbers between the two arrays. Each value must 
 * be from the other array, not from the same one.
 */

// Brute Force: Runtime O(nm) | O(1) Space
function smallestDifference(arrayOne, arrayTwo) {

  let difference = Infinity,
    current = []

  for (let left of arrayOne) {
    for (let right of arrayTwo) {
      if (Math.abs(left - right) < difference) {
        difference = Math.abs(left - right)
        current = [left, right]
      }
    }
  }
  return current
}

// Runtime O(n*log(n) + m*log(m)) | O(n) Space
/* Solution: 
 * Both of the arrays will be sorted which is why the runtime 
 * is going to be n*log(n) for each respective array. The trick 
 * is to use the fact that the arrays are sorted and then 
 * iterate from left to right, only updating the smallest difference
 * if and only if the difference is smaller than the last. 
 */
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let left = 0, right = 0, smallest = Infinity, res = []

  while (left < arrayOne.length && right < arrayTwo.length) {
    let difference = Math.abs(arrayOne[left] - arrayTwo[right])

    if (difference < smallest) {
      smallest = difference
      res = [arrayOne[left], arrayTwo[right]]
    }
    // move pointers based on smaller value
    if (arrayOne[left] < arrayTwo[right]) left++
    else right++
  }
  return res
}