const { assert } = require('chai')
const { StackOfPlates } = require('../stack_of_plates')

xdescribe('Implement Stack of Plates class', () => {
  let test, test2

  beforeEach(() => {
    test = new StackOfPlates(2)
    test.push(1).push(2)

    test2 = new StackOfPlates(2)
    test2.push(1).push(2).push(3).push(4).push(5).push(6)
  })

  describe('push() implementation', () => {
    it('populates the first stack correctly', () => {
      assert.deepEqual(test.piles[0], [1, 2])
    })

    it('creates a new stack after capacity is exceeded', () => {
      test.push(3) // forces a new array to be created
      assert.typeOf(test.piles[1], 'array')
    })

    it('correctly populates the new stack', () => {
      test.push(3).push(4)
      assert.deepEqual(test.piles[1], [3, 4])
    })
  })

  describe('pop() implementation', () => {

    it('succesfully removes an element from the last stack', () => {
      test2.pop()
      assert.deepEqual(test2.piles[2], [5])
    })

    it('succesfully removes an entire stack', () => {
      test2.pop()
      test2.pop()
      assert.deepEqual(test2.piles[2], [])
    })

    it('can succesfully add new elements after emptied', () => {
      test.pop()
      test.pop()
      test.push(1).push(2).push(3)
      assert.deepEqual(test.piles[0], [1, 2])
    })

    it('return an empty array when stack is empty', () => {
      test.pop()
      test.pop()
      assert.deepEqual(test.piles.pop(), [])
    })
  })

  describe('popAt() implementation', () => {
    it('can pop() an element at any stack', () => {
      let result = test2.popAt(1)
      assert.equal(result, 4)
    })

    it('can pop() an element at any stack and repoplulate', () => {
      test2.popAt(1)
      test2.popAt(1)
      test2.push(5).push(6)
      assert.deepEqual(test2.piles[1], [5, 6])
    })
  })
})