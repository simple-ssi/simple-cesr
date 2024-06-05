import { Buffer } from 'buffer/index.js'
import { base64UrlToBuffer } from '../../../lib/util/base64/base64UrlToBuffer.js'

export const toByteArray = (base64: string): Buffer => base64UrlToBuffer(base64)
