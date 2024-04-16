import { Buffer } from 'buffer/index.js'
import { Text } from '../../../core/domain/text.js'
import { base64UrlToBytes } from '../../../lib/util/base64/base64UrlToBytes.js'

// takes a type code and a CESR encoded string, and returns another transitional object
export const toBytes = (text: Text): Buffer => base64UrlToBytes(text)
