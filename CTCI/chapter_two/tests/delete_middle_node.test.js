const { assert } = require('chai')
const { SinglyLinkedList } = require('../../../DataStructures/singly_linked_list')
const { removeMiddleNode } = require('../delete_middle_node')

xdescribe('Implement the solution remove kth to last', () => {
  let test1

  beforeEach(() => {
    test1 = new SinglyLinkedList()
    test1.insert('a').insert('b').insert('c').insert('d').insert('e').insert('f')
    // test1 = ['a', 'b', 'c', 'd', 'e', 'f']
  })

  it('Should return an object of singly linked list class', () => {
    assert.typeOf(removeMiddleNode(test1, 'b'), 'object')
  })

  it('Removes the second element `b` from the list', () => {
    assert.deepEqual(removeMiddleNode(test1, 'b').values(), ['a', 'c', 'd', 'e', 'f'])
  })

  it('Removes the element `d` from the list', () => {
    assert.deepEqual(removeMiddleNode(test1, 'd').values(), ['a', 'b', 'c', 'e', 'f'])
  })

  it('Doesn\'t remove an element from the start of the list', () => {
    assert.deepEqual(removeMiddleNode(test1, 'a').values(), ['a', 'b', 'c', 'd', 'e', 'f'])
  })

  it('Doesn\'t remove an element from the end of the list', () => {
    assert.deepEqual(removeMiddleNode(test1, 'f').values(), ['a', 'b', 'c', 'd', 'e', 'f'])
  })
})