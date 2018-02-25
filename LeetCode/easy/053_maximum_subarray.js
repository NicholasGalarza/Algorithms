/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let currentSum = -Infinity,
    largestSum = currentSum

  for (const element of nums) {
    currentSum = Math.max(currentSum + element, element)
    largestSum = (currentSum > largestSum) ? currentSum : largestSum
  }

  return largestSum
}