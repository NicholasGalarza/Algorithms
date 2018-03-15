const { SinglyLinkedList } = require('../../../DataStructures/singly_linked_list')
const { assert } = require('chai')
const { removeKthLast } = require('../kth_to_last')

xdescribe('Implement the solution remove kth to last', () => {
  let test1

  beforeEach(() => {
    test1 = new SinglyLinkedList()
    test1.insert(3).insert(5).insert(7).insert(9).insert(11)
    // test1 = [3, 5, 7, 9, 11]
  })

  it('Should return an object of singly linked list class', () => {
    assert.typeOf(removeKthLast(test1, 3), 'object')
  })

  it('Should be able to remove an element in the middle of list', () => {
    assert.deepEqual(removeKthLast(test1, 3).values(), [3, 5, 9, 11])
  })

  it('Should be able to remove an element at the start of list', () => {
    assert.deepEqual(removeKthLast(test1, 5).values(), [5, 7, 9, 11])
  })

  it('Should be able to remove an element at the end of list', () => {
    assert.deepEqual(removeKthLast(test1, 1).values(), [3, 5, 7, 9])
  })

  it('Returns the original list when `k` is out of bounds', () => {
    assert.deepEqual(removeKthLast(test1, 0).values(), [3, 5, 7, 9, 11])
    assert.deepEqual(removeKthLast(test1, 7).values(), [3, 5, 7, 9, 11])
  })

})