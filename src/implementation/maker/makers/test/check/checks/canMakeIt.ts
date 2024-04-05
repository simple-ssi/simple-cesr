import 'mocha'
import { assert } from 'chai'

import { make } from '../../../../../make'
import { Configuration } from '../../configuration'

export const canMakeIt = (configuration: Configuration): Configuration => {
  const { code, example } = configuration

  it('makes it', () => {
    const actual = make(code, example)

    assert.strictEqual(actual.code, code)
    assert.strictEqual(actual.raw, example)
  })
  return configuration
}
