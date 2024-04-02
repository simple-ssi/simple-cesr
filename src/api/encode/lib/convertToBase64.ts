import { Buffer } from 'buffer/'
import { encodeBase64url } from '../../../lib/util/encodeBase64url.js'

// simple conversion of the primitive (as a byte array) to Base64
export const convertToBase64 = (primitive: Buffer): string => encodeBase64url(primitive)
