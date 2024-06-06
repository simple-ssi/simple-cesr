import { Buffer } from 'buffer/index.js'
import { Text } from '../../../core/domain/domains/text.js'
import { base64UrlToBuffer } from '../../../lib/convertors/base64UrlToBuffer.js'

export const transformTextToBinary = (text: Text): Buffer => base64UrlToBuffer(text) // just need to convert base64url to bytes
