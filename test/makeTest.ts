import { Maker } from '../src/application/makeRaw/maker/maker.ts'
import { Code } from '../src/core/code/code.ts'

export const makeTest = (maker: Maker) => (code: Code) => (example: any): any => {
  it('can make', () => {
    const actual = maker(example)
    expect(actual.code).toBe(code)
    expect(actual.raw.toString('hex')).toBe(example)
  })
  return example
}
