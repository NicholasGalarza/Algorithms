const { assert } = require('chai')
const { sortArrayOfStrings } = require('../sortArrayOfStrings')

describe('Sort Array of Strings', () => {
  const test1 = ["b", "a", "e", "c", "d", "f", "g"]
  const test2 = ["b", "a", "e", "c", "?", "d", "f", "g", ","]
  const test3 = ["foo", "kang", "adam", "alex", "bryan", "brian"]

  it('Should return a string', () => {
    assert.typeOf(sortArrayOfStrings(test1), 'string')
  })

  it('Should return a sorted string with no false characters', () => {
    assert.equal(sortArrayOfStrings(test1), "abcdefg")
  })

  xit('Should return a sorted string with false characters removed', () => {
    assert.equal(sortArrayOfStrings(test2), "abcdefg")
  })

  xit('Should return an empty string when there is nothing but false characters', () => {
    assert.equal(sortArrayOfStrings(["?", ",", "%"]), "")
  })

  it('Should sort an array of names', () => {
    assert.equal(sortArrayOfStrings(test3), "adamalexbrianbryanfookang")
  })
})