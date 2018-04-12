const { LCA } = require('../common_ancestor')
const { assert } = require('chai')
const { BST } = require('../../../DataStructures/binary_search_tree')

describe('Implement the solution for first common ancestor', () => {
  let test

  beforeEach(() => {
    test = new BST(40)
    test.insert(20).insert(80).insert(10).insert(30).insert(68).insert(100).insert(5).insert(15).insert(25).insert(35).insert(1)
  })

  it('returns a value of type string', () => {
    const result = LCA(test, 10, 100)
    assert.typeOf(result.value, 'number')
  })

  it('returns 40 as the ancestor for nodes: 10 & 100', () => {
    const result = LCA(test, 10, 100)
    assert.equal(result.value, 40)
  })

  it('returns 20 as the ancestor for nodes: 1 & 25', () => {
    const result = LCA(test, 1, 25)
    assert.equal(result.value, 20)
  })

  it('returns 80 as the ancestor for nodes: 68 & 100', () => {
    const result = LCA(test, 68, 100)
    assert.equal(result.value, 80)
  })
})