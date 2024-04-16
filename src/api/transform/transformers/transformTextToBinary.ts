import { Buffer } from 'buffer/index.js'
import { Text } from '../../../core/domain/text.js'
import { base64UrlToBytes } from '../../../lib/util/base64/base64UrlToBytes.js'

export const transformTextToBinary = (text: Text): Buffer =>
  base64UrlToBytes(text) // just need to convert base64url to bytes
