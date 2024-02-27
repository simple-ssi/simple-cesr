import { Buffer } from 'buffer'

export const toBase64 = (binary: Buffer): string => binary.toString('base64url')
