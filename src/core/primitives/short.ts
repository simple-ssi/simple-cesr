
import convertNumberToBytes from '../helpers/convertNumberToBytes'
import countBits from '../helpers/countBits'
import { Primitive, PrimitiveBuilder, RawPrimitive, RawPrimitiveBuilder } from '../primitive'

export type Short = number & { _type: 'short' }

export const buildShort: PrimitiveBuilder = (value: number): Short => {
  // must not be greater than 2 bytes or 16 bits
  if (countBits(value) <= 16) {
    return value as Short
  } else {
    throw new Error('Not a short number.')
  }
}

export const buildRawShort: RawPrimitiveBuilder = (short: Primitive): RawPrimitive => convertNumberToBytes(short as Short, 2) as RawPrimitive
