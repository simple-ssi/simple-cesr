import { buildTextFromRaw, Text } from '../core/domains/text'
import { Raw } from '../core/domains/raw'
export default (raw: Raw): Text => {
  return buildTextFromRaw(raw)
}
