import { Buffer } from 'buffer/index.js'
import { decodeBase64url } from '../../../lib/util/decodeBase64url.js'

// a primitive Binary domain is simply the CESR encoded text string as a byte array
export const asBinary = (cesrText: string): Buffer =>
  decodeBase64url(cesrText)
