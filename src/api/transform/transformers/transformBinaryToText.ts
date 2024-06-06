import { Binary } from '../../../core/domain/domains/binary.js'
import { Text } from '../../../core/domain/domains/text.js'
import { bufferToBase64URL } from '../../../lib/convertors/bufferToBase64URL.js'

export const transformBinaryToText = (binary: Binary): Text => bufferToBase64URL(binary) // just need to convert bytes to base64url
