import { Buffer } from 'buffer/index.js'
import { Text } from '../../../core/domain/text.js'
import { base64UrlToBuffer } from '../../../lib/util/base64/base64UrlToBuffer.js'

export const transformTextToBinary = (text: Text): Buffer =>
  base64UrlToBuffer(text) // just need to convert base64url to bytes
