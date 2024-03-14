import { Buffer } from 'buffer'

export const convertToBase64 = (binary: Buffer): string => binary.toString('base64url')
