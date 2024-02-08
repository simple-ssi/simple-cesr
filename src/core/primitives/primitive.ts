import { Secp256k1PubOrEncKey } from './basicFourCharacter/secp256k1PubOrEncKey'
import { Sha3512Digest } from './basicTwoCharacter/sha3512Digest'
import { Long } from './basicOneCharacter/long'
import { Short } from './basicOneCharacter/short'
import { Ed25519Seed } from './basicOneCharacter/ed25519Seed'

export type Primitive =
  Ed25519Seed |
  Short |
  Long |
  Sha3512Digest |
  Secp256k1PubOrEncKey
