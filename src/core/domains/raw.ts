import { Buffer } from 'buffer'
import { Text } from './text'
import { Primitive, primitiveBuilderFactory, RawPrimitive } from '../primitive'
import { TextCode } from '../textCode'

export type Raw = [TextCode, RawPrimitive] & { _type: 'raw' }

export const buildRaw = (code: TextCode, primitive: Primitive): Raw => {
  const rawPrimitiveBuilder = primitiveBuilderFactory(code)
  const rawPrimitive = rawPrimitiveBuilder(primitive)
  return [code, rawPrimitive] as Raw
}

export const buildRawFromText = (text: Text): Raw => {
  const code = text.charAt(0) as TextCode

  const paddedBinary = Buffer.from(text, 'base64url')
  // Assumes a two-byte primitive
  // TO DO: use calculatePadSize to handle %1 and %3
  const primitive = Buffer.from(
    paddedBinary
      .toString('hex')
      .slice(2),
    'hex'
  ) as RawPrimitive

  return [code, primitive] as Raw
}
