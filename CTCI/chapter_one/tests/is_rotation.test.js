const { assert } = require('chai')
const { isRotation } = require('../string_rotation')

describe('Implement the solution for is rotation', () => {
  const test1 = ['waterbottle', 'erbottlewat']
  const test2 = ['bottle', 'water']

  it('Should return a boolean value', () => {
    assert.typeOf(isRotation(test1[0], test1[1]), 'boolean')
  })

  it(`Should return true for ${test1[0]} and ${test1[1]}`, () => {
    assert.equal(isRotation(...test1), true)
  })

  it(`Should return false for ${test2[0]} and ${test2[1]}`, () => {
    assert.equal(isRotation(...test2), false)
  })
})