const { assert } = require('chai')
const { zeroMatrix } = require('../zero_matrix')

describe('Zero out row and column if zero is present in matrix', () => {
  const test1 =
    [[1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1]]

  const result1 =
    [[1, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 0, 0, 0]]

  it('Should return an matrix', () => {
    assert.typeOf(zeroMatrix(test1), 'array')
  })

  it('Should return zeroed out matrix to their according index', () => {
    assert.equal(zeroMatrix(test1), result1)
  })
})