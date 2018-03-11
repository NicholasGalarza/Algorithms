const { assert } = require('chai')
const { compressString } = require('../string_compression')

describe('Compress the given string into the specified format', () => {
  const test1 = 'aabcccccaaa'
  const test2 = 'abcdefg'
  const test3 = 'aaaaaaaaaa'

  it('Should return a string', () => {
    assert.typeOf(compressString(test1), 'string')
  })

  it(`Compresses the ${test1} correctly`, () => {
    assert.equal(compressString(test1), 'a2b1c5a3')
  })

  it('Returns original string if tentative compression is larger', () => {
    assert.equal(compressString(test2), 'abcdefg')
  })

  it(`Compresses the ${test3} correctly`, () => {
    assert.equal(compressString(test3), 'a10')
  })
})