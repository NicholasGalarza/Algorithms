// Runtime O(n) | O(1) Space
function subarraySort(array) {
  let orderMin = Infinity, orderMax = -Infinity

  const isOutOfOrder = (idx, num, arr) => {
    // the two if()s statements are for good practice of not
    // accessing the array in a position which doesn't exist.
    if (idx === 0) return num > array[idx + 1]
    if (idx === array.length - 1) return num < array[idx - 1]
    return num < array[idx - 1] || num > array[idx + 1]
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (isOutOfOrder(i, element, array)) {
      orderMin = Math.min(orderMin, element)
      orderMax = Math.max(orderMax, element)
    }
  }

  if (orderMin === Infinity) return [-1, -1]

  let leftIdxRange = 0, rightIdxRange = array.length - 1

  while (orderMin >= array[leftIdxRange]) leftIdxRange++
  while (orderMax <= array[rightIdxRange]) rightIdxRange--

  return [leftIdxRange, rightIdxRange]
}

/* Problem Explanation
 * Find the tentative smallest & largest values in the unordered subarray.
 * To determine if there is an array that is unordered, ask these two questions: 
 *  1.) Is the current element "less than" the next element?
 *  2.) Is the current element "greater than" the previous element? 
 * If one of these two cases is true, then the array isn't in order.
 * 
 * Update the minimum and maximum values by calling min() and max() on each 
 * each tententative smallest & largest value to update the values.
 * 
 * To find the range, all we have to do now is use those tentative values. 
 * To find the left index, iterate from the left until you hit the smallest value
 * is "greater than or equal" to the array. Boom, there goes the left index. 
 * The same logic for the right index must be applied to find the rightmost value.
 */ 