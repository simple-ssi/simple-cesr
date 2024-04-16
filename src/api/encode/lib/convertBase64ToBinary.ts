import { Buffer } from 'buffer/index.js'
import { base64UrlToBytes } from '../../../lib/util/base64/base64UrlToBytes.js'

export const convertBase64ToBinary = (base64UrlString: string): Buffer => base64UrlToBytes(base64UrlString)
