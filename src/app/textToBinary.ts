import { Text, Binary, buildBinaryFromText } from '../core/domain'

export const textToBinary = (text: Text): Binary => buildBinaryFromText(text)
