import { TextCode } from '../core/textCode'
import { Binary, buildRaw, buildText, buildBinary } from '../core/domain'
export const rawToBinary = (code: TextCode, primitive: Buffer): Binary => {
  const raw = buildRaw(code, primitive)
  const text = buildText(raw)
  return buildBinary(text)
}
