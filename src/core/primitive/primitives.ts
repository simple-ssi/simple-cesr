import { Raw } from '../domain/domains.ts'

// One Character Codes
export type Ed25519Seed = Raw & { readonly code: 'A' }
export type Short = Raw & { readonly code: 'M' }
export type Big = Raw & { readonly code: 'N' }

// Two Character Codes
export type Sha3512 = Raw & { readonly code: '0F' }

// Four Character Codes
export type Ecdsa256k1 = Raw & { readonly code: '1AAB' }
