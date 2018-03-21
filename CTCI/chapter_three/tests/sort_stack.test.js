const { MinStack } = require('../sort_stack')
const { assert } = require('chai')

describe('Implementation for MinStack', () => {
  let test

  beforeEach(() => {
    test = new MinStack()
    test.push(5).push(3).push(2).push(6)
  })

  describe('Implement push()', () => {
    it('is able to store elements into the stack', () => {
      assert.deepEqual(test.storage, [[2, 3, 5, 6]])
    })
  })

  xdescribe('Implement peek()', () => {
    it('is able to show the smallest value in the stack', () => {
      assert.deepEqual(test.storage.peek(), 2)
      assert.deepEqual(test.storage, [[2, 3, 5, 6]])
    })
  })

  xdescribe('Implement push()', () => {
    it('removes the smallest value in the stack', () => {
      assert.deepEqual(test.storage.pop(), 2)
    })

    it('removes the next value too', () => {
      test.pop() // removes 2
      assert.deepEqual(test.storage.pop(), 3)
    })
  })

  xdescribe('Implement isEmpty()', () => {
    assert('returns `false` when the stack has elements', () => {
      assert.deepEqual(test.isEmpty(), false)
    })

    assert('returns `true` when the stack has no elements', () => {
      // remove all elements from the sample space
      test.pop()
      test.pop()
      test.pop()
      test.pop()
      assert.deepEqual(test.isEmpty(), true)
    })
  })

})