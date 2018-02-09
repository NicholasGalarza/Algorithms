// Runtime O(n * lg(n)) | Space O(1)
/*
function largestRange(array) {

  array = array.sort((a, b) => a - b)

  let leftTick = 0, HLEFT = 0, HRIGHT = 0,
    counter = 0, highest = -Infinity

  for (let curr = 0; curr < array.length - 1; curr++) {

    const next = curr + 1
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
*/

// Runtime O(n) | Space O(n)
function largestRange(array) {

  let visited = {}, range = []

  for (const element of array) {
    visited[element] = false
  }

  const getRange = (value) => {
    let temp = [], iter = value

    // Check left of index, update hash, store element in array
    while (iter in visited && visited[iter] === false) {
      visited[iter] = true
      temp.push(iter)
      iter--
    }

    // Reset iter to one past the initial value
    iter = value + 1

    // Check right of index, update hash, store element in array
    while (iter in visited && visited[iter] === false) {
      visited[iter] = true
      temp.push(iter)
      iter++
    }

    return temp
  }

  for (const element of array) {
    if (visited[element] === false) {
      let temp = getRange(element)
      if (temp.length >= range.length) range = temp
    }
  }

  return [Math.min(...range), Math.max(...range)]
}