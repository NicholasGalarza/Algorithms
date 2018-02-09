// Runtime O(n * lg(n)) | Space O(1)
function largestRange(array) {

  array = array.sort((a, b) => a - b)

  let leftTick = 0, HLEFT = 0, HRIGHT = 0,
    counter = 0, highest = -Infinity

  for (let curr = 0, next = curr + 1; curr < array.length - 1; curr++ , next++) {

    if (array[curr] + 1 === array[next] || array[curr] === array[next]) {
      counter++
    } else {
      counter = 0
      leftTick = next
    }

    if (counter > highest) {
      HLEFT = leftTick
      HRIGHT = next
      highest = counter
    }
  }

  return [array[HLEFT], array[HRIGHT]]
}