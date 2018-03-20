const { assert } = require('chai')
const { StackMin } = require('../stack_min')

describe('Implement the solution for StackMin', () => {
  let test

  beforeEach(() => {
    test = new StackMin()
    test.push(2).push(3).push(1).push(4)
  })

  describe('Implementation for push()', () => {
    it('should add each value to the inner `stack` property', () => {
      const res = [2, 3, 1, 4]
      assert.deepEqual(test.stack, res)
    })

    it('should keep track of the minimum value each time a new value is added', () => {
      const res = [2, 2, 1, 1]
      assert.deepEqual(test.minState, res)
    })
  })

  describe('Implementation for pop()', () => {
    it('should return an object', () => {
      const result = test.pop()
      assert.typeOf(result, 'object')
    })

    it('should contain { "element": 4, "min": 1 } for the result of the operation', () => {
      const result = test.pop()
      assert.deepEqual(result, { "element": 4, "min": 1 })
    })
  })

  describe('Implementation for min()', () => {
    it('should return `1` after all push operations', () => {
      assert.deepEqual(test.min(), 1)
    })

    it('should return `2` after all values but one have been removed', () => {
      test.pop()
      test.pop()
      test.pop()
      assert.deepEqual(test.min(), 2)
    })

    it('should return `null` when all values have been removed', () => {
      test.pop()
      test.pop()
      test.pop()
      test.pop()
      assert.deepEqual(test.min(), null)
    })
  })

})