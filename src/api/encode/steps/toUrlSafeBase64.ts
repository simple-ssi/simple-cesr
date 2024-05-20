import { Buffer } from 'buffer/index.js'
import { bufferToBase64URL } from '../../../lib/util/base64/bufferToBase64URL.js'

export const toUrlSafeBase64 = (bytes: Buffer): string => bufferToBase64URL(bytes)
