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