import { ECDSA_256k1 } from './primitives/basicFourCharacter/ecdsa256k1.ts'
import { SHA3_512 } from './primitives/basicTwoCharacter/sha3x512.ts'
import { Big } from './primitives/basicOneCharacter/big.ts'
import { Short } from './primitives/basicOneCharacter/short.ts'
import { Ed25519Seed } from './primitives/basicOneCharacter/ed25519Seed.ts'

export type Primitive =
  Ed25519Seed |
  Short |
  Big |
  SHA3_512 |
  ECDSA_256k1
