import { Text, Binary, buildBinary } from '../core/domain'

export const textToBinary = (text: Text): Binary => buildBinary(text)
