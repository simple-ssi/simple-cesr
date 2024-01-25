import { Raw, buildRawFromText } from '../core/domains/raw'
import { Text } from '../core/domains/text'

export default (text: Text): Raw => buildRawFromText(text)
