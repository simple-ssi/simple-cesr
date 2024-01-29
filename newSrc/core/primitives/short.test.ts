import { Short, makeShort } from './short'
import { Primitive } from '../primitive'
import { makeNullPrimitive } from './null'

const example: Short = {
  code: 'M',
  value: Buffer.from('0001', 'hex')
}

describe('Short', () => {
  test('Make Short from valid input returns Short', () => {
    const expected: Short = example
    const actual = makeShort(example.value)
    expect(expected).toStrictEqual(actual)
  })
  test('Make Short from invalid input returns null object', () => {
    const expected: Primitive = makeNullPrimitive()
    const actual = makeShort(Buffer.from('ffff0000', 'hex'))
    expect(expected).toStrictEqual(actual)
  })
})
