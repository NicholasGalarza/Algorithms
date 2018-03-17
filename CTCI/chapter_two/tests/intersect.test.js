const { LinkedListNode, printAll, values } = require('../../../DataStructures/linked_list_node')
const { assert } = require('chai')
const { intersect } = require('../intersection')

describe('Implement the algorithm to determine if two nodes intersect one another', () => {
  /*
   * Nodes & containers for singly linked lists
   */

  // sample space one
  let a1, b1, c1, d1
  let a2, b2, c2, d2

  // sample space two
  let e1, f1
  let e2, f2, g2

  // sample space three
  let fo1, fo2, fo3, fo4, fo5, fo6, fo7, fo8
  let bo1, bo2, bo3, bo4, bo5

  // helper method to connect nodes in container
  const connectNodes = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i].next = arr[i+1]
    }
  }

  beforeEach(() => {
    // Sample Space One -- Intersecting LLS with same length
    a1 = new LinkedListNode('a')
    b1 = new LinkedListNode('b')
    c1 = new LinkedListNode('c')
    d1 = new LinkedListNode('d')
    connectNodes([a1, b1, c1, d1])
    a2 = new LinkedListNode('d')
    b2 = b1
    c2 = c1
    d2 = d1 
    connectNodes([a2, b2, c2, d2])

    // Sample Space Two -- Non LLS with different lengths
    e1 = new LinkedListNode('a')
    f1 = new LinkedListNode('b')
    connectNodes([e1, f1])
    e2 = new LinkedListNode('c')
    f2 = new LinkedListNode('d')
    g2 = new LinkedListNode('e')
    connectNodes([e2, f2, g2])

    // Sample Space Three -- Intersecting LLS with different lengths
    fo1 = new LinkedListNode('a')
    fo2 = new LinkedListNode('b')
    fo3 = new LinkedListNode('c')
    fo4 = new LinkedListNode('d')
    fo5 = new LinkedListNode('f')
    fo6 = new LinkedListNode('g')
    fo7 = new LinkedListNode('h')
    fo8 = new LinkedListNode('i')
    connectNodes([fo1, fo2, fo3, fo4, fo5, fo6, fo7, fo8])
    bo1 = new LinkedListNode('j')
    bo2 = new LinkedListNode('k')
    bo3 = fo4 // insersection starts
    bo4 = fo5
    bo5 = fo6
    connectNodes([bo1, bo2, bo3, bo4, bo5])
  })

  it('returns a linked_list_node for the sets', () => {
    const result = intersect(a1, a2)
    assert.typeOf(result, 'object')
  })
  
  it('returns node `b` for the sets ', () => {
    const result = intersect(a1, a2)
    assert.deepEqual(result, b1)
  })

  it('returns `null` for two non-intersecting linked lists', () => {
    const result = intersect(e1, e2)
    assert.deepEqual(result, null)
  })

  it('returns `` for two intersecting LLS with different lengths', () => {
    const result = intersect(fo1, bo1)
    assert.deepEqual(result, fo4)
  })
})

/* 
 * Visual-Model of intersecting (singly) linked lists
 * 
 * x -> y --------| 
 *                |
 *                V
 * a -> b -> c -> d -> e -> f
 */
