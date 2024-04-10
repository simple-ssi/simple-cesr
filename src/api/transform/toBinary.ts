import { Binary, Text, Raw } from '../../core/domain/domains.js'
import { binary } from '../encode/binary.js'
import { decodeBase64url } from '../../lib/util/decodeBase64url.js'

export function toBinary (text: Text): Binary
export function toBinary (Raw: Raw): Binary

export function toBinary (textOrRaw: Text | Raw): Binary {
  if (typeof textOrRaw === 'string') return decodeBase64url(textOrRaw)
  else return binary(textOrRaw.code, textOrRaw.raw)
}
