import { Buffer } from 'buffer/'

// the node.js Buffer package doesn't support base64url encoding currently.
// this helper function copied from signify-ts (https://github.com/WebOfTrust/signify-ts/blob/a49db7f3c39e687d3a7d6a3751b47358cfd66653/src/keri/core/base64.ts#L8)
export const encodeBase64url = (buffer: Buffer): string =>
  buffer
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+/, '')
