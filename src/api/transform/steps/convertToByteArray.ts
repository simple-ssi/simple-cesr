import { Buffer } from 'buffer/index.js'
import { base64UrlToBuffer } from '../../../lib/convertors/base64UrlToBuffer.js'

export const convertToByteArray = (base64: string): Buffer => base64UrlToBuffer(base64)
