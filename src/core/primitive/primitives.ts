import { Raw } from '../domain/domains/raw.js'

// One Character Codes
export type Ed25519Seed = Raw & { readonly code: 'A' }
export type Ed25519n = Raw & { readonly code: 'B' }
export type X25519 = Raw & { readonly code: 'C' }
export type Ed25519 = Raw & { readonly code: 'D' }
export type Blake3256 = Raw & { readonly code: 'E' }
export type Blake2b256 = Raw & { readonly code: 'F' }
export type Blake2s256 = Raw & { readonly code: 'G' }
export type Sha3256 = Raw & { readonly code: 'H' }
export type Sha2256 = Raw & { readonly code: 'I' }
export type Ecdsa256k1Seed = Raw & { readonly code: 'J' }
export type Short = Raw & { readonly code: 'M' }
export type Big = Raw & { readonly code: 'N' }
export type X25519Private = Raw & { readonly code: 'O' }

// Two Character Codes
export type Salt128 = Raw & { readonly code: '0A' }
export type Ed25519Sig = Raw & { readonly code: '0B' }
export type Ecdsa256k1Sig = Raw & { readonly code: '0C' }
export type Blake3512 = Raw & { readonly code: '0D' }
export type Blake2b512 = Raw & { readonly code: '0E' }
export type Sha3512 = Raw & { readonly code: '0F' }
export type Sha2512 = Raw & { readonly code: '0G' }
export type Long = Raw & { readonly code: '0H' }

// Four Character Codes
export type Ecdsa256k1n = Raw & { readonly code: '1AAA' }
export type Ecdsa256k1 = Raw & { readonly code: '1AAB' }
export type Ed448n = Raw & { readonly code: '1AAC' }
export type Ed448 = Raw & { readonly code: '1AAD' }
export type Ed448s = Raw & { readonly code: '1AAE' }
export type FourB64ThreeByte = Raw & { readonly code: '1AAF' }
