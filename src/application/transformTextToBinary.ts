import { Binary, buildBinaryFromText } from '../core/domains/binary'
import { Text } from '../core/domains/text'

export default (text: Text): Binary => buildBinaryFromText(text)
