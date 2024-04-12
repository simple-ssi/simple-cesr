import { Buffer } from 'buffer/index.js'
import { Text } from '../../../core/domain/text.js'
import { decodeBase64url } from '../../../lib/util/decodeBase64url.js'

// takes a type code and a CESR encoded string, and returns another transitional object
export const toBytes = (text: Text): Buffer => decodeBase64url(text)
