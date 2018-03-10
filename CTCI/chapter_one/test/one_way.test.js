const { assert } = require('chai')
const { isOneAway } = require('../one_way')

describe('Check if both strings are one edit or zero edits away', () => {
  const test1 = ['pale', 'ple']
  
  it('Should return a boolean', () => {
    assert.typeOf(isOneAway(test1[0], test1[1]), 'boolean')
  })
})