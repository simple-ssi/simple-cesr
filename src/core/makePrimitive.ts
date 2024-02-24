import { match } from 'ts-pattern'
import { makeEcdsa256k1 } from './primitives/basicFourCharacter/ecdsa256k1'
import { makeSha3x512 } from './primitives/basicTwoCharacter/sha3x512'
import { makeBig } from './primitives/basicOneCharacter/big'
import { makeShort } from './primitives/basicOneCharacter/short'
import { TextCode } from './codes/textCode'
import { Primitive } from './primitive'
import { makeEd25519Seed } from './primitives/basicOneCharacter/ed25519Seed'

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
  .with('A', () => makeEd25519Seed(primitive))
  .with('M', () => makeShort(primitive))
  .with('N', () => makeBig(primitive))
  .with('0F', () => makeSha3x512(primitive))
  .with('1AAB', () => makeEcdsa256k1(primitive))
  .exhaustive()
