const { GraphNode } = require('../../../DataStructures/graph_node')
const { assert } = require('chai')
const { routeFinder } = require('../route_between_nodes')

xdescribe('Implement method to determine if route exists between two nodes', () => {

  const test = new GraphNode('a')
  test.addChild('b').addChild('c')
  test.children[0].addChild('d')

  const test1 = new GraphNode('a')
  test1.addChild('b').addChild('c')
  test1.children[1].addChild('d').addChild('e').addChild('f')
  test1.children[1].children[2].addChild('g')

  it('returns `true` when for Node(a) and Node(c)', () => {
    const result = routeFinder(test, 'a', 'c')
    assert.equal(result, true)
  })

  it('returns `false` for Node(a) and Node(g)', () => {
    const result = routeFinder(test, 'a', 'g')
    assert.equal(result, false)
  })

  it('returns `true` for Node(a) and Node(d)', () => {
    const result = routeFinder(test1, 'a', 'd')
    assert.equal(result, true)
  })

  it('returns `true` for Node(a) and Node(g)', () => {
    const result = routeFinder(test1, 'a', 'g')
    assert.equal(result, true)
  })

  it('returns `false` for Node(a) and Node(h)', () => {
    const result = routeFinder(test1, 'a', 'h')
    assert.equal(result, false)
  })
})