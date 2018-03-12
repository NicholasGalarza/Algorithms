/* 
 * 1.8 Zero Matrix
 * Write an algo such that if an element in
 * an MxN matrix is 0, its entire row and
 * column are set to 0.
 */

/*
 * @params {[[]]} matrix
 * @return {[[]]}
 * Runtime O(nm) | Space (nm)
 */
function zeroMatrix(matrix) {
  const row = [], col = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i)
        col.push(j)
      }
    }
  }
  console.log('row', row)
  console.log('col', col)
  nullifyRowHelper(matrix, row)
  nullifyColumnHelper(matrix, col)
  return matrix
}


function nullifyRowHelper(matrix, R) {
  for (let i = 0; i < R.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const curr_row = R[i]
      matrix[curr_row][j] = 0
    }
  }
}

function nullifyColumnHelper(matrix, C) {
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const column = C[i]
      matrix[j][column] = 0
    }
  }
}

module.exports.zeroMatrix = zeroMatrix