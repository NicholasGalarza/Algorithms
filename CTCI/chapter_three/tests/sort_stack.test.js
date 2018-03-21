const { MinStack } = require('../sort_stack')
const { assert } = require('chai')

xdescribe('Implementation for MinStack', () => {
  let test

  beforeEach(() => {
    test = new MinStack()
    test.push(5).push(3).push(2).push(6)
  })

  describe('Implement push()', () => {
    it('is able to store elements into the stack', () => {
      assert.deepEqual(test.storage, [6, 5, 3, 2])
    })
  })

  describe('Implement peek()', () => {
    it('is able to show the smallest value in the stack', () => {
      assert.deepEqual(test.peek(), 2)
      assert.deepEqual(test.storage, [6, 5, 3, 2])
    })

    it('returns an `[]` if the stack is empty', () => {
      test.pop()
      test.pop()
      test.pop()
      test.pop()
      assert.deepEqual(test.peek(), [])
    })
  })

  describe('Implement push()', () => {
    it('removes the smallest value in the stack', () => {
      assert.deepEqual(test.pop(), 2)
    })

    it('removes the next value too', () => {
      test.pop() // removes 2
      assert.deepEqual(test.pop(), 3)
    })
  })

  describe('Implement isEmpty()', () => {
    it('returns `false` when the stack has elements', () => {
      assert.deepEqual(test.isEmpty(), false)
    })

    it('returns `true` when the stack has no elements', () => {
      // remove all elements from the sample space
      test.pop()
      test.pop()
      test.pop()
      test.pop()
      assert.deepEqual(test.isEmpty(), true)
    })
  })

})