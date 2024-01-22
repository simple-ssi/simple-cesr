import { Binary, Raw, buildRawFromText, buildTextFromBinary } from '../core/domain'

export default (binary: Binary): Raw => {
  const text = buildTextFromBinary(binary)
  return buildRawFromText(text)
}
