// Runtime O(m + n) | Space O(1)
function searchInSortedMatrix(matrix, target) {
  let row = 0, m = matrix[0].length - 1

  while (row < matrix.length && m >= 0) {
    const current = matrix[row][m]
    if (current === target) return [row, m]
    else if (current > target) m--
    else row++
  }
  return [-1, -1]
}