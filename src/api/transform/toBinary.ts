import { Buffer } from 'buffer'
import { Binary, Text, Raw } from '../../core/domain/domains.js'
import { binary } from '../encode/binary.js'

export function toBinary (text: Text): Binary
export function toBinary (Raw: Raw): Binary

export function toBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return Buffer.from(textOrRaw, 'base64url')
  else return binary(textOrRaw.code, textOrRaw.raw)
}
