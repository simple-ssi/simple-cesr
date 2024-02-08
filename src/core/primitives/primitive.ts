import { ECDSA_256k1 } from './basicFourCharacter/ecdsa256k1'
import { SHA3_512 } from './basicTwoCharacter/sha3x512'
import { Big } from './basicOneCharacter/big'
import { Short } from './basicOneCharacter/short'
import { Ed25519Seed } from './basicOneCharacter/ed25519Seed'

export type Primitive =
  Ed25519Seed |
  Short |
  Big |
  SHA3_512 |
  ECDSA_256k1
