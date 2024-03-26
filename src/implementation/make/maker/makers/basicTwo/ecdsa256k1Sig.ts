import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { Ecdsa256k1Sig } from '../../../../../core/primitive/primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { itIs64Bytes } from '../../lib/validate/validations/lengthIs.ts'

export const ecdsa256k1Sig: Maker = (primitive: Buffer): Ecdsa256k1Sig => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0C',
    raw: primitive
  }
}
