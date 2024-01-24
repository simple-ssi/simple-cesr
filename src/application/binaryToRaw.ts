import { Binary, Raw, buildRawFromText, buildTextFromBinary } from '../core/representation'

export default (binary: Binary): Raw => {
  const text = buildTextFromBinary(binary)
  return buildRawFromText(text)
}
