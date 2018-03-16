const { assert } = require('chai')
const { LinkedListNode, printAll, values } = require('../../../DataStructures/linked_list_node')
const { sumLists } = require('../sum_lists')

describe('Implement the solution for sum lists', () => {
  let a1, a2, a3
  let b1, b2, b3

  beforeEach(() => {
    // First Example
    a1 = new LinkedListNode(7)
    a2 = new LinkedListNode(1)
    a3 = new LinkedListNode(6)

    b1 = new LinkedListNode(5)
    b2 = new LinkedListNode(9)
    b3 = new LinkedListNode(2)

    a1.next = a2
    a2.next = a3
    b1.next = b2
    b2.next = b3
  })

  it('returns a linked_list', () => {
    assert.typeOf(sumLists(a1, b1), 'object')
  })

  it('sums the values `617` and `295` to `912`', () => {
    const c1 = new LinkedListNode(2),
      c2 = new LinkedListNode(1),
      c3 = new LinkedListNode(9)

    c1.next = c2
    c2.next = c3

    const result = sumLists(a1, b1)
    assert.deepEqual(values(result), values(c1))
  })
})