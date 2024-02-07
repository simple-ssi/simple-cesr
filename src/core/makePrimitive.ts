import { match } from 'ts-pattern'
import { makeSecp256k1PubOrEncKey } from './primitives/basicFourCharacter/secp256k1PubOrEncKey'
import { makeSha3512Digest } from './primitives/basicTwoCharacter/sha3512Digest'
import { makeLong } from './primitives/basicOneCharacter/long'
import { makeShort } from './primitives/basicOneCharacter/short'
import { TextCode } from './codes/textCode'
import { Primitive } from './primitives/primitive'

// to do: I'm not comfortable throwing errors if I can avoid it...research this more ... perhaps it's OK? What's the alternative?
export class PrimitiveWrongLength extends Error {
  constructor () {
    super('input is not the correct length for this primitive type')
    this.name = 'PRIMITIVE_WRONG_LENGTH'
  }
}

export class PrimitiveInvalidInput extends Error {
  constructor () {
    super('input is not valid for this primitive type')
    this.name = 'PRIMITIVE_INVALID_INPUT'
  }
}

export const makePrimitive = (code: TextCode, primitive: any): Primitive => match(code)
  .with('M', () => makeShort(primitive))
  .with('N', () => makeLong(primitive))
  .with('0F', () => makeSha3512Digest(primitive))
  .with('1AAB', () => makeSecp256k1PubOrEncKey(primitive))
  .exhaustive()
