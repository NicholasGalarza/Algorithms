/* Problem: 
 * Write a function that takes a sorted array and a target 
 * integer. Implement the binary search algorithm to find 
 * if the target exists in the array
 */

/* Runtime O(logn) | O(logn) Space
 * Explanation: Binary Search (Recursive Solution Explanation)
 * 
 * 1.) Find the midpoint of the array
 * 
 * 2.) Construct a sub array which will be the first half of the original 
 *  array if the target is less than the middle array element. Otherwise, 
 *  the sub-array will contain the other half which contains greater values.
 * 
 * 3.) Since this is a recursive solution, we need to track the positioning 
 *  because the array parameter is getting cut in half upon each invocation. 
 *  I'm using a third parameter position to keep track of the original index
 *  and I'm increasing the position if and only if the the sub array 
 *  contains values greater than the current mid-point value. This is how to 
 *  keep track of the original arrays position. 
 * 
 *  4.) Last we ask three questions to see if the target value is found.
 * 
 *   4.1 - if the middle value in the array matches the target, then return 
 *         the position. 
 * 
 *   4.2 - if the subarray still has more than one element, meaning, the 
 *         the array can still be chopped by halves each invokation, then 
 *         recursively call binarySearch().
 * 
 *   4.3 - if the subarray can no longer be chopped and the remaning value 
 *         in the subarray doesn't match the target. Then the target simply 
 *         does not exist in the subarray. Return -1 for non-existing values.
 *  
 *  Complexity: 
 *  The runtime is O(logn) because each time the binarySearch() function is 
 *  invoked, all possible results that can be found are being cut in half. 
 *  
 *  Space: 
 *  The space complexity is O(logn) because each time the array is being 
 *  split, the memory is storing each resulting halved sub array upon each 
 *  invocation. In other words, each pass of binarySearch() is storing half 
 *  of each resulting array.
 */
function binarySearch(array, target, pos = 0) {

  // determine midpoint and construct subarray based around the midpoint.
  const mid = Math.floor(array.length / 2),
    arr = (target < array[mid]) ? array.slice(0, mid) : array.slice(mid)

  // only increment mid if the target is greater than middle position
  if (target >= array[mid]) pos += mid

  if (array[mid] === target) {
    return pos
  } else if (array.length > 1) {
    return binarySearch(arr, target, pos)
  } else {
    return -1
  }
}