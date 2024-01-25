import { Binary, buildBinaryFromText } from '../core/domains/binary'
import { buildTextFromRaw } from '../core/domains/text'
import { Raw } from '../core/domains/raw'

export default (raw: Raw): Binary => {
  const text = buildTextFromRaw(raw)
  return buildBinaryFromText(text)
}
