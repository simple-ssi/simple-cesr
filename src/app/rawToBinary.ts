import { Binary, Raw, buildTextFromRaw, buildBinaryFromText } from '../core/domain'
export const rawToBinary = (raw: Raw): Binary => {
  const text = buildTextFromRaw(raw)
  return buildBinaryFromText(text)
}
