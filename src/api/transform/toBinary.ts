import { Binary } from '../../core/domain/binary.js'
import { Raw } from '../../core/domain/raw.js'
import { Text } from '../../core/domain/text.js'
import { binary } from '../encode/binary.js'
import { decodeBase64url } from '../../lib/util/decodeBase64url.js'

export function toBinary (text: Text): Binary
export function toBinary (Raw: Raw): Binary

export function toBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return decodeBase64url(textOrRaw)
  else return binary(textOrRaw.code, textOrRaw.raw)
}
