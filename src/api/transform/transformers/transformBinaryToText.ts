import { Binary } from '../../../core/domain/binary.js'
import { Text } from '../../../core/domain/text.js'
import { bufferToBase64URL } from '../../../lib/util/base64/bufferToBase64URL.js'

export const transformBinaryToText = (binary: Binary): Text =>
  bufferToBase64URL(binary) // just need to convert bytes to base64url
