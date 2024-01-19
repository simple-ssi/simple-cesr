import { TextCode } from '../core/textCode'
import { Binary, buildRaw, buildTextFromRaw, buildBinaryFromText } from '../core/domain'
export const rawToBinary = (code: TextCode, primitive: Buffer): Binary => {
  const raw = buildRaw(code, primitive)
  const text = buildTextFromRaw(raw)
  return buildBinaryFromText(text)
}
