import { Text, Binary, buildTextFromBinary } from '../core/domain'

export const binaryToText = (binary: Binary): Text => buildTextFromBinary(binary)
