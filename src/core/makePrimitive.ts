import { match } from 'ts-pattern'
import { makeSecp256k1PubOrEncKey } from './primitives/basicFourCharacter/secpPubOrEncKey'
import { makeSha3512Digest } from './primitives/basicTwoCharacter/sha3512Digest'
import { makeLong } from './primitives/basicOneCharacter/long'
import { makeShort } from './primitives/basicOneCharacter/short'
import { TextCode } from './codes/textCode'
import { Primitive } from './primitives/primitive'

export const makePrimitive = (code: TextCode, primitive: any): Primitive => match(code)
  .with('M', () => makeShort(primitive))
  .with('N', () => makeLong(primitive))
  .with('0F', () => makeSha3512Digest(primitive))
  .with('1AAB', () => makeSecp256k1PubOrEncKey(primitive))
  .exhaustive()
