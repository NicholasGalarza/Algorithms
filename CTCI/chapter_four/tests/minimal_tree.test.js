const { assert } = require('chai')
const { minimalTree } = require('../minimal_tree')

describe('Implement the minimal tree', () => {

  let test = [-10, -3, 0, 5, 9]

  it('returns the desired array', () => {
    const result = minimalTree(test).breadthFirstSearch()
    console.log('hi', result)
    assert.deepEqual(result, [0, -10, 5, -3, 9])
  })
})