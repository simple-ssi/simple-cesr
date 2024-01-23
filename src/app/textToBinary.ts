import { Text, Binary, buildBinaryFromText } from '../core/representation'

export default (text: Text): Binary => buildBinaryFromText(text)
