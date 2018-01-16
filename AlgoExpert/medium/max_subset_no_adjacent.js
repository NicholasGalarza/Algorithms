// Runtime O(n) | O(n) Space
/* Explanation
 * Using the piece-wise function: 
 * maxSum[i] = MAX: { maxSum[i-1]
 *                    maxSum[i-2] + array[i]}
 * Each maxSum will be stored inside of 
 * another array, hence each array the space 
 * of this solution will be O(n) since it is 
 * the same size as the input array.
 */
function maxSubsetSumNoAdjacent(array) {

  if (array.length === 0) return 0
  else if (array.length === 1) return array[0]

  let perElementSum = [array[0]],
    currentMaxSum = 0

  perElementSum[1] = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    currentMaxSum = Math.max(perElementSum[i - 1], perElementSum[i - 2] + array[i])
    perElementSum.push(currentMaxSum)
  }

  return perElementSum[perElementSum.length - 1]
}

// Runtime O(n) | O(1) Space
function maxSubsetSumNoAdjacent(array) {

  if (array.length === 0) return 0
  else if (array.length === 1) return array[0]

  let currentMaxSum = 0,
    second = array[0],
    first = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    currentMaxSum = Math.max(first, second + array[i])
    second = first
    first = currentMaxSum
  }

  return first
}