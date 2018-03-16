const { assert } = require('chai')
const { LinkedListNode, printAll, values } = require('../../../DataStructures/linked_list_node')
const { sumLists } = require('../sum_lists')

xdescribe('Implement the solution for sum lists', () => {
  let a1, a2, a3,
    b1, b2, b3

  let c1, c2, c3, c4,
    d1, d2, d3

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

    // Second Example
    c1 = new LinkedListNode(7)
    c2 = new LinkedListNode(1)
    c3 = new LinkedListNode(6)
    c4 = new LinkedListNode(3)

    d1 = new LinkedListNode(5)
    d2 = new LinkedListNode(9)
    d3 = new LinkedListNode(2)

    c1.next = c2
    c2.next = c3
    c3.next = c4
    d1.next = b2
    d2.next = b3
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

  it('sums values which aren\'t the same length', () => {
    const e1 = new LinkedListNode(2),
      e2 = new LinkedListNode(1),
      e3 = new LinkedListNode(9),
      e4 = new LinkedListNode(3)

    e1.next = e2
    e2.next = e3
    e3.next = e4
   
    const result = sumLists(c1, d1)
    assert.deepEqual(values(result), values(e1))
  })
})