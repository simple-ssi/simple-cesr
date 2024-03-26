import { Binary, Text, Raw } from '../../core/domain/domains.ts'
import { encodeBinary } from '../encode/encoders/encodeBinary.ts'

export function transformToBinary (text: Text): Binary
export function transformToBinary (Raw: Raw): Binary

export function transformToBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return Buffer.from(textOrRaw, 'base64url')
  else return encodeBinary(textOrRaw.code, textOrRaw.raw)
}
