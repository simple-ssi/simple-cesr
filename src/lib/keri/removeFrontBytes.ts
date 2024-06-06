import { Buffer } from 'buffer/index.js'

// trim the given number of bytes from the front of a byte array
export const removeFrontBytes = (n: number) => (bytes: Buffer): Buffer => {
  return Buffer.from(bytes.subarray(n, bytes.length))
}
