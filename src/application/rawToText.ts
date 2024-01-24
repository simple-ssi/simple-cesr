import { Text, Raw, buildTextFromRaw } from '../core/representation'
export default (raw: Raw): Text => {
  return buildTextFromRaw(raw)
}
