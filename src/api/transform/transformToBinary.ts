import { Binary, Text, Raw } from '../../core/domain/Domains.ts'
import { encodeAsBinary } from '../encode/encodeAsBinary.ts'

export function transformToBinary (text: Text): Binary
export function transformToBinary (Raw: Raw): Binary

export function transformToBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return Buffer.from(textOrRaw, 'base64url')
  else return encodeAsBinary(textOrRaw.code, textOrRaw.raw)
}
