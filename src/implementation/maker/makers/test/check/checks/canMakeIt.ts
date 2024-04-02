import { make } from '../../../../../make.js'
import { Configuration } from '../../configuration.js'

export const canMakeIt = (configuration: Configuration): Configuration => {
  const { code, example } = configuration

  it('makes it', () => {
    const actual = make(code, example)

    expect(actual.code).toBe(code)
    expect(actual.raw).toBe(example)
  })
  return configuration
}
