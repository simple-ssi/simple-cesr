import { make } from '../../../../../make.js'
import { Configuration } from '../../configuration.js'

export const canMakeIt = (configuration: Configuration): Configuration => {
  const { code, primitive } = configuration

  it('makes it', () => {
    const actual = make(code, primitive)

    expect(actual.code).toBe(code)
    expect(actual.raw).toBe(primitive)
  })
  return configuration
}
