const { assert } = require('chai')
const { isOneAway } = require('../one_way')

describe.skip('Check if both strings are one edit or zero edits away', () => {
  const test1 = ['pale', 'ple']
  const test2 = ['pales', 'pale']
  const test3 = ['pale', 'bale']
  const test4 = ['pale', 'bake']

  it('Should return a boolean', () => {
    assert.typeOf(isOneAway(test1[0], test1[1]), 'boolean')
  })

  it(`Returns true for ${test1[0]} and ${test1[1]}`, () => {
    assert.equal(isOneAway(test1[0], test1[1]), true)
  })

  it(`Returns true for ${test2[0]} and ${test2[1]}`, () => {
    assert.equal(isOneAway(test2[0], test2[1]), true)
  })

  it(`Returns true for ${test3[0]} and ${test3[1]}`, () => {
    assert.equal(isOneAway(test3[0], test3[1]), true)
  })

  it(`Returns false for ${test4[0]} and ${test4[1]}`, () => {
    assert.equal(isOneAway(test4[0], test4[1]), false)
  })
})