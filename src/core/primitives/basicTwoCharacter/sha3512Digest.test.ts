import { PrimitiveWrongLength } from '../../makePrimitive'
import { makeSha3512Digest } from './sha3512Digest'

describe('makeSha3512Digest enforces validity', () => {
  test('check length', () => {
  // example value
    // const example = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
    // must be 64 bytes long
    expect(() => makeSha3512Digest('0'.padEnd(129, '0'))).toThrowError(PrimitiveWrongLength)
    expect(() => makeSha3512Digest('0'.padEnd(127, '0'))).toThrowError(PrimitiveWrongLength)
  })
})
