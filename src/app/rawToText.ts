import { Text, Raw, buildTextFromRaw } from '../core/domain'
export default (raw: Raw): Text => {
  return buildTextFromRaw(raw)
}
