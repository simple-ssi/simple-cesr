import { Maker } from '../src/useCases/make/maker/maker.ts'
import { Code } from '../src/core/code/code.ts'

export const makeTest = (maker: Maker) => (code: Code) => (example: any): any => {
  it('can make', () => {
    const actual = maker(example)
    expect(actual.code).toBe(code)
    expect(actual.raw.toString('hex')).toBe(example)
  })
  return example
}
