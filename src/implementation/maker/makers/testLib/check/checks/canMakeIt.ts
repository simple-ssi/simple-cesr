import { make } from '../../../../../make.js'
import { MakerTestParameters } from '../../makerTestParameters.js'

export const canMakeIt = (configuration: MakerTestParameters): MakerTestParameters => {
  const { code, primitive } = configuration

  it('makes it', () => {
    const actual = make(code, primitive)

    expect(actual.code).toBe(code)
    expect(actual.raw).toBe(primitive)
  })
  return configuration
}
