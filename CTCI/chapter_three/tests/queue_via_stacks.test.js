const { Queue2Stacks } = require('../queue_via_stacks')
const { assert } = require('chai')

xdescribe('Implementation for a queue using two stacks', () => {
  let test

  beforeEach(() => {
    test = new Queue2Stacks()
    test.push(1).push(2).push(3).push(4)
  })

  it('is able to store new values', () => {
    assert.deepEqual(test.N, [1, 2, 3, 4])
  })

  it('is able to reveal the first element added to the queue', () => {
    assert.deepEqual(test.peek(), 1)
    assert.deepEqual(test.O, [4, 3, 2, 1])
  })

  it('it is able to remove the oldest value in the queue', () => {
    assert.deepEqual(test.pop(), 1)
  })
})