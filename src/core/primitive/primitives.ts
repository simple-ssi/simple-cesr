import { Raw } from '../domain/domains.ts'

// One Character Codes
export type Ed25519Seed = Raw & { code: 'A' }
export type Short = Raw & { code: 'M' }
export type Big = Raw & { code: 'N' }

// Two Character Codes
export type Sha3512 = Raw & { code: '0F' }

// Four Character Codes
export type Ecdsa256k1 = Raw & { code: '1AAB' }
