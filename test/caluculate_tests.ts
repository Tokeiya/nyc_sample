import {suite} from 'mocha'
import {assert as chai} from 'chai'
import {add} from '../src/calculate'

suite('add', () => {
  test('1 + 1 = 2', () => {
	chai.equal(add(1, 1), 2)
  })
})