import { Buffer } from 'buffer'
import { RawPrimitiveBuilder, RawPrimitive } from '../primitive'

export const buildShort: RawPrimitiveBuilder = (short: Buffer): RawPrimitive => {
  if (short.length === 2) {
    return short as RawPrimitive
  } else {
    console.log('Not a two-byte Short')
    throw new Error('Not a two-byte Short')
  }
}
