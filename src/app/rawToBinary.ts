import { Binary, Raw, buildTextFromRaw, buildBinaryFromText } from '../core/domain'
export default (raw: Raw): Binary => {
  const text = buildTextFromRaw(raw)
  return buildBinaryFromText(text)
}
