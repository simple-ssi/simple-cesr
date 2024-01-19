import { Buffer } from 'buffer'

import { TextCode } from '../core/textCode'
import { Text, buildRaw, buildTextFromRaw } from '../core/domain'
export const rawToText = (code: TextCode, primitive: Buffer): Text => {
  const raw = buildRaw(code, primitive)
  return buildTextFromRaw(raw)
}
