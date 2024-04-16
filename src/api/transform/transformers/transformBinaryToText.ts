import { Binary } from '../../../core/domain/binary.js'
import { Text } from '../../../core/domain/text.js'
import { bytesToBase64URL } from '../../../lib/util/base64/bytesToBase64URL.js'

export const transformBinaryToText = (binary: Binary): Text =>
  bytesToBase64URL(binary) // just need to convert bytes to base64url
