// Runtime O(n) | Space O(n)
function waterArea(heights) {
  const maxes = []

  let currentLeftMax = 0, currentRightMax = 0

  for (const height of heights) {
    maxes.push(currentLeftMax)
    currentLeftMax = Math.max(currentLeftMax, height)
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i],
      minHeight = Math.min(currentRightMax, maxes[i])
      
    maxes[i] = (height < minHeight) ? minHeight - height : 0
    currentRightMax = Math.max(currentRightMax, height)
  }

  return maxes.reduce((accum, element) => accum + element, 0)
}