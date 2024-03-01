import { PrimitiveWrongLength } from '../../error.ts'
import { makeShort } from './makeShort.ts'

describe('Short maker', () => {
  it('makes a Short', () => {
    const example = '001f'
    const actual = makeShort(Buffer.from(example, 'hex'))
    expect(actual.code).toBe('M')
    expect(actual.raw.toString('hex')).toBe(example)
  })
  it('checks length', () => {
    expect(() => makeShort(65536)).toThrow(PrimitiveWrongLength)
  })
})
