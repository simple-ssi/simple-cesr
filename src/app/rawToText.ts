import { Text, Raw, buildTextFromRaw } from '../core/domain'
export const rawToText = (raw: Raw): Text => {
  return buildTextFromRaw(raw)
}
