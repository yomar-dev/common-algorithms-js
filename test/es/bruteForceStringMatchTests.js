'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { bruteForceStringMatch } from '../../es'

const expect = chai.expect

// Test
describe('Brute Force String Match Algorithm: bruteForceStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(bruteForceStringMatch('test', 'est')).to.eql(1)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(bruteForceStringMatch('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(bruteForceStringMatch('test', 'xyzsda')).to.eql(-1)
  })
})
