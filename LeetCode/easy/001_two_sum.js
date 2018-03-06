/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime O(n) | Space O(n)
 */
const twoSum = (nums, target) => {
  const cache = {}

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const diff = target - current
    if (!(current in cache)) cache[current] = i
    if (diff in cache && cache[diff] !== i) return [cache[diff], i]
  }
  return []
}