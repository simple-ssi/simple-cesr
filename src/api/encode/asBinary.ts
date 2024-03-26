import { Buffer } from 'buffer'

// a primitive Binary domain is simply the CESR encoded text string as a byte array
export const asBinary = (cesrText: string): Buffer =>
  Buffer.from(
    cesrText,
    'base64url'
  )
