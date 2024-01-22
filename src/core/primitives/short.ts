import { Buffer } from 'buffer'
import { RawPrimitiveBuilder, RawPrimitive } from '../primitive'

export type Short = RawPrimitive & { _primitiveType: 'short' }

export const buildShort: RawPrimitiveBuilder = (short: Buffer): Short => {
  if (short.length === 2) {
    return short as Short
  } else {
    console.log('Not a two-byte Short')
    throw new Error('Not a two-byte Short')
  }
}
