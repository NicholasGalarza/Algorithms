const { BST } = require('../../../DataStructures/binary_search_tree')
const { assert } = require('chai')
const { listOfDepth } = require('../list_of_depth')

class SinglyLinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }

  insert(value) {
    const node = new SinglyLinkedList(value)
    let current = this
    while (current.next !== null) {
      current = current.next
    }
    current.next = node
    return this
  }
}

xdescribe('Implement list_of_depth soluton', () => {
  let test

  beforeEach(() => {
    test = new BST(7)
    test.insert(5).insert(3).insert(1).insert(6).insert(9).insert(8).insert(15)
  })

  it('returns a linked list for each level in the tree', () => {
    const solution = {
      '0': new SinglyLinkedList(7),
      '1': new SinglyLinkedList(5).insert(9),
      '2': new SinglyLinkedList(3).insert(6).insert(8).insert(15),
      '3': new SinglyLinkedList(1)
    }
    assert.deepEqual(listOfDepth(test), solution)
  })
})