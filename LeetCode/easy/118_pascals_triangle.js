/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  const result = []
  let temp = []

  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j <= i; j++) {
      const element = (j == 0 | j == i) ? 1 : temp[j - 1] + temp[j]
      row.push(element)
    }
    temp = row // cache the row to access on the next inner for loop
    result.push(row) // push current row into final solution
  }
  return result
};