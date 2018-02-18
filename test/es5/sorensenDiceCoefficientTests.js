'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Sorensen-Dice Coefficient ES5 Algorithm: sorensenDiceCoefficient(input1, input2)', function () {
  it('Should return the Sorenson-Dice Coefficient between the input strings.', function () {
    expect((0, _es.sorensenDiceCoefficient)('test', '')).to.eql(0)
    expect((0, _es.sorensenDiceCoefficient)('tex', 'esr')).to.eql(0)
    expect((0, _es.sorensenDiceCoefficient)('texts', 'text')).to.eql(0.8571428571428571)
    expect((0, _es.sorensenDiceCoefficient)('text', 'text')).to.eql(1)
    expect((0, _es.sorensenDiceCoefficient)('text', 'rext')).to.eql(0.6666666666666666)
  })
})
