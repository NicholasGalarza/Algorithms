function fourNumberSum(array, targetSum) {
  let result = [],
    hashPairs = {}

  for (let p = 1; p < array.length; p++) {
    // sum p and k and see if the difference of targetSum and [p+k] exist in hash
    for (let k = p + 1; k < array.length; k++) {
      let difference = targetSum - (array[p] + array[k])

      if (hashPairs.hasOwnProperty(difference)) {
        for (const pair of hashPairs[difference]) {
          const quad = pair.concat([array[p], array[k]])
          result.push(quad)
        }
      }
    }

    for (let k = 0; k < p; k++) {
      let current = array[k] + array[p]

      if (!hashPairs.hasOwnProperty(current)) {
        hashPairs[current] = []
      }
      if (hashPairs.hasOwnProperty(current)) {
        hashPairs[current].push([array[k], array[p]])
      }
    }
  }
  return result
}