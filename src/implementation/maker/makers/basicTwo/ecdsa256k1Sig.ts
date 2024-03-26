import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Ecdsa256k1Sig } from '../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'

export const ecdsa256k1Sig: Maker = (primitive: Buffer): Ecdsa256k1Sig => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0C',
    raw: primitive
  }
}
