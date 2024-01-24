import { Binary, Raw, buildTextFromRaw, buildBinaryFromText } from '../core/representation'
export default (raw: Raw): Binary => {
  const text = buildTextFromRaw(raw)
  return buildBinaryFromText(text)
}
