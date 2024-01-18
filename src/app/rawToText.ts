import { TextCode } from '../core/textCode'
import { Text, buildRaw, buildText } from '../core/domain'
export const rawToText = (code: TextCode, primitive: Buffer): Text => {
  const raw = buildRaw(code, primitive)
  return buildText(raw)
}
