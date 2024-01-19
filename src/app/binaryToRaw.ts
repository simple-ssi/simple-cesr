import { Binary, Raw, buildRawFromText, buildTextFromBinary } from '../core/domain'

export const binaryToRaw = (binary: Binary): Raw => {
  const text = buildTextFromBinary(binary)
  return buildRawFromText(text)
}
