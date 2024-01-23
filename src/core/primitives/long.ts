
import convertNumberToBytes from '../helpers/convertNumberToBytes'
import countBits from '../helpers/countBits'
import { Primitive, PrimitiveBuilder, RawPrimitive, RawPrimitiveBuilder } from '../primitive'

export type Long = number & { _type: 'long' }

export const buildLong: PrimitiveBuilder = (value: number): Long => {
  // must not be greater than 2 bytes or 16 bits
  if (countBits(value) <= 32) {
    return value as Long
  } else {
    throw new Error('Not a long number.')
  }
}

export const buildRawLong: RawPrimitiveBuilder = (long: Primitive): RawPrimitive => convertNumberToBytes(long as Long, 4) as RawPrimitive
