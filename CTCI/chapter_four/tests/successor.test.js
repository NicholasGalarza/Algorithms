const { assert } = require('chai')
const { successor } = require('../successor')

describe('Implement the solution to find successor of binary tree', () => {
  let test

  beforeEach(() => {
    test = new Tree(20)
    test.insert(8).insert(22).insert(4).insert(12).insert(10).insert(14)
  })

  it('determines that 10 is the successor of 8', () => {
    const result = test.left.right.left.value
    assert.equal(successor(test, 10), result)
  })

  it('determines that 12 is the successor of 10', () => {
    const result = test.left.right.value
    assert.equal(successor(test, 12), result)
  })

  it('determines that 20 is the succesor of 14', () => {
    const result = test.value
    assert.equal(successor(test, 14), result)
  })
})

// Tree class with parent node, used specifically for this problem
class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  insert(value) {
    const node = new Tree(value)
    let current = this

    if (value <= this.value) {
      if (this.left) {
        current = this.left
        current.insert(value)
      } else {
        this.left = node
        node.parent = this
      }
    } else {
      if (this.right) {
        current = this.right
        current.insert(value)
      } else {
        this.right = node
        node.parent = this
      }
    }
    return this
  }

  breadthFirstSearch() {
    const values = []
    const queue = [this]

    while (queue.length > 0) {
      const current = queue.shift()
      values.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return values
  }
}