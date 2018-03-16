const { assert } = require('chai')
const { SinglyLinkedList } = require('../../../DataStructures/singly_linked_list')
const { partition } = require('../partition')

describe('Implement solution for partitioning a linked list around a specified value', () => {
  let test = new SinglyLinkedList() // [3,2,1,5,8,5,10]
  test.insert(3).insert(5).insert(8).insert(5).insert(10).insert(2).insert(1)

  it('returns an object', () => {
    assert.typeOf(partition(test1, 5), 'object')
  })

  it('places lower values to left of partition and greater values to right of partition', () => {
    assert.deepEqual(partition(test, 5), [3, 2, 1, 5, 8, 5, 10])
  })
})