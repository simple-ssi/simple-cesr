import { Text, Binary, buildBinaryFromText } from '../core/domain'

export default (text: Text): Binary => buildBinaryFromText(text)
