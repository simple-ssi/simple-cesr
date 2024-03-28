import { make } from '../../../../../make.js'
import { Configuration } from '../../configuration.js'

export const canMakeIt = (configuration: Configuration): Configuration => {
  const { code, example } = configuration

  it('makes it', () => {
    const actual = make(code, example)

    expect(actual.code).toBe(code)

    // handle both options for example: a string or a Buffer
    switch (typeof example) {
      case 'string':
        expect(actual.raw.toString('hex')).toEqual(example)
        break
      default:
        expect(actual.raw).toBe(example)
    }
  })
  return configuration
}
