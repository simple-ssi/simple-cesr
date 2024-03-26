import { Buffer } from 'buffer'
import { Binary, Text, Raw } from '../../core/domain/domains.ts'
import { encodeBinary } from '../encode/encoders/encodeBinary.ts'

export function toBinary (text: Text): Binary
export function toBinary (Raw: Raw): Binary

export function toBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return Buffer.from(textOrRaw, 'base64url')
  else return encodeBinary(textOrRaw.code, textOrRaw.raw)
}
