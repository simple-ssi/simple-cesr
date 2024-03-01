import { TestConfiguration } from '../TestConfiguration.ts'

export const canMakeIt = (configuration: TestConfiguration): TestConfiguration => {
  const { code, maker, example } = configuration

  it('makes it', () => {
    const actual = maker(example)
    expect(actual.code).toBe(code)
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
