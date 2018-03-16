const { assert } = require('chai')
const { LinkedListNode, printAll, values } = require('../../../DataStructures/linked_list_node')
const { partition } = require('../partition')

xdescribe('Implement solution for partitioning a linked list around a specified value', () => {

  let a, b, c, d, e, f, g

  beforeEach(() => {
    // [3, 5, 8, 5, 10, 2, 1](5) => [3, 2, 1, 5, 8, 5, 10]
    a = new LinkedListNode(3)
    b = new LinkedListNode(5)
    c = new LinkedListNode(8)
    d = new LinkedListNode(5)
    e = new LinkedListNode(10)
    f = new LinkedListNode(2)
    g = new LinkedListNode(1)

    // Linking the nodes together
    a.next = b
    b.next = c
    c.next = d
    d.next = e
    e.next = f
    f.next = g
    g.next = null
  })

  it('returns a linked_list_node object', () => {
    assert.typeOf(partition(a, 5), 'object')
  })

  it('places smaller values to left of 5 and >= values to right', () => {
    const result = partition(a, 5)
    assert.deepEqual(values(result), [3, 2, 1, 5, 8, 5, 10])
  })
})