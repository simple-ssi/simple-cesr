import { Buffer } from 'buffer'
import { Text } from '../../../core/domain/domains.js'

// takes a type code and a CESR encoded string, and returns another transitional object
export const toBytes = (text: Text): Buffer => Buffer.from(text, 'base64url')
