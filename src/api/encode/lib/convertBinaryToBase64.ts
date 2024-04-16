import { Buffer } from 'buffer/index.js'
import { bytesToBase64URL } from '../../../lib/util/base64/bytesToBase64URL.js'

// simple conversion of the primitive (as a byte array) to Base64
export const convertBinaryToBase64 = (primitive: Buffer): string => bytesToBase64URL(primitive)
