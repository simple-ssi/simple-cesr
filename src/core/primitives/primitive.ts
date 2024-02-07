import { Secp256k1PubOrEncKey } from './basicFourCharacter/secp256k1PubOrEncKey'
import { Sha3512Digest } from './basicTwoCharacter/sha3512Digest'
import { Long } from './basicOneCharacter/long'
import { Short } from './basicOneCharacter/short'

export type Primitive =
  Short |
  Long |
  Sha3512Digest |
  Secp256k1PubOrEncKey
