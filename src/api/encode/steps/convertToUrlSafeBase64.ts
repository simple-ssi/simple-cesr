import { Buffer } from 'buffer/index.js'
import { bufferToBase64URL } from '../../../lib/convertors/bufferToBase64URL.js'

export const convertToUrlSafeBase64 = (bytes: Buffer): string => bufferToBase64URL(bytes)
