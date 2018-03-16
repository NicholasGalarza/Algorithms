const { assert } = require('chai')
const { SinglyLinkedList, printAll, values } = require('../../../DataStructures/singly_linked_list')
const { isPalindrome } = require('../palindrome')

describe('implement the solution to determine if linked list is a palindrome', () => {
  let test1, test2

  beforeEach(() => {
    test1 = new SinglyLinkedList()
    test1.insert('a').insert('b').insert('b').insert('a')

    test2 = new SinglyLinkedList()
    test2.insert('f').insert('l').insert('u').insert('f').insert('f')

  })

  it('returns a `boolean` value', () => {
    assert.typeOf(isPalindrome(test1), 'boolean')
  })

  it('returns `true` for `abba`', () => {
    assert.equal(isPalindrome(test1), true)
  })

  it('returns `false` for `fluff`', () => {
    assert.equal(isPalindrome(test2), false)
  })
})