import { Buffer } from 'buffer/index.js'

// the node.js Buffer package doesn't support base64url decoding currently.
// this helper function copied from signify-ts (https://github.com/WebOfTrust/signify-ts/blob/a49db7f3c39e687d3a7d6a3751b47358cfd66653/src/keri/core/base64.ts#L8)
export const base64UrlToBytes = (base64url: string): Buffer => {
  const n = base64url.length % 4
  const padded = base64url + '='.repeat(n > 0 ? 4 - n : n)
  const base64String = padded.replace(/-/g, '+').replace(/_/g, '/')
  return Buffer.from(base64String, 'base64')
}
