// Runtime O(n^2) | O(1) Space
function selectionSort(array) {
  let swapPoint, swap = false

  for (let i = 0; i < array.length; i++) {
    let smallest = array[i]
    // select smallest in this sub loop
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j]
        swapPoint = j
        swap = true
      }
    }

    if (swap) {
      let temp = array[i]
      array[i] = smallest
      array[swapPoint] = temp
      swap = false
    }
  }
  return array
}