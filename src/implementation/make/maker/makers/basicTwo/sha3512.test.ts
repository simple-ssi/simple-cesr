import { PrimitiveWrongLength } from '../../error.ts'
import { makeSha3512 } from './sha3512.ts'

describe('Sha3512 maker', () => {
  it('makes Sha3512', () => {
    // example value
    const example = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    const actual = makeSha3512(example)
    expect(actual.code).toBe('0F')
    expect(actual.raw.toString('hex')).toEqual(example)
  })
  it('checks length', () => {
    // must be 64 bytes long
    expect(() => makeSha3512('0'.padEnd(129, '0'))).toThrow(PrimitiveWrongLength)
    expect(() => makeSha3512('0'.padEnd(127, '0'))).toThrow(PrimitiveWrongLength)
  })
})
