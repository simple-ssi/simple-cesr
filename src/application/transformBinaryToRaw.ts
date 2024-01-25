import { buildTextFromBinary } from '../core/domains/text'
import { Raw, buildRawFromText } from '../core/domains/raw'
import { Binary } from '../core/domains/binary'

export default (binary: Binary): Raw => {
  const text = buildTextFromBinary(binary)
  return buildRawFromText(text)
}
