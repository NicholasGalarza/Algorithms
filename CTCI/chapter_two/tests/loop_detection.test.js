const { LinkedListNode, printAll, values } = require('../../../DataStructures/linked_list_node')
const { assert } = require('chai')
const { detectLoop } = require('../loop_detection.js')

describe('Determine if a linked list is cicular', () => {
  let test1, b, c, d, e, f, g, h, i, j, k
  let test2, b1, c1, d1, e1

  // helper method to connect nodes in container
  const connectNodes = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i + 1]
    }
  }

  beforeEach(() => {
    // sample set one
    test1 = new LinkedListNode('a'),
      b = new LinkedListNode('b'),
      c = new LinkedListNode('c'),
      d = new LinkedListNode('d'), // <- start of loop
      e = new LinkedListNode('e'),
      f = new LinkedListNode('f'),
      g = new LinkedListNode('g'),
      h = new LinkedListNode('h'),
      i = new LinkedListNode('i'),
      j = new LinkedListNode('j'),
      k = new LinkedListNode('k')
    connectNodes([test1, b, c, d, e, f, g, h, i, j, k])
    k.next = d // this makes the linked list circular

    // sample set two -- no loop
    test2 = new LinkedListNode('a'),
      b1 = new LinkedListNode('b'),
      c1 = new LinkedListNode('c'),
      d1 = new LinkedListNode('d'),
      e1 = new LinkedListNode('e')
    connectNodes([test2, b1, c1, d1, e1])
  })

  it('returns a linked list', () => {
    assert.typeOf(detectLoop(test1), 'object')
  })

  it('returns a linked_list when the sample is circular', () => {
    assert.deepEqual(detectLoop(test1), d)
  })

  it('returns `null` if the linked list isn\'t circular', () => {
    assert.deepEqual(detectLoop(test2), null)
  })
})