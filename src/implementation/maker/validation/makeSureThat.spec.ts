import 'mocha'
import { assert } from 'chai'
import { Validation } from './validation'
import { makeSureThat } from './makeSureThat'

describe('Validator', () => {
  const mockValidator: Validation = () => true
  it('can run validations', () => {
    assert.equal(makeSureThat(mockValidator), true)
  })
})
