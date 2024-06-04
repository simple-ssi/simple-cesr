import { Buffer } from 'buffer/index.js'
import { makeIntoTuple } from './makeIntoTuple.js'

describe('Make Into Tuple', () => {
  it('makes a tuple from a code and a raw primitive', () => {
    const code = 'M'
    const raw = Buffer.from([0x00, 0x01])
    const makeIntoTupleWithCode = makeIntoTuple(code)
    const actual = makeIntoTupleWithCode(raw)
    expect(actual).toStrictEqual({ code, raw })
  })
})
