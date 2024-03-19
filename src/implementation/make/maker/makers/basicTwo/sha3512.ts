import { Buffer } from 'buffer'
import { Maker } from '../../Maker.ts'
import { Sha3512 } from '../../../../../core/primitive/Primitives.ts'
import { makeSureThat } from '../../lib/validate/validate.ts'
import { primitiveIs64Bytes } from '../../lib/validate/validations/lengthIs.ts'

// SHA3 512-bit digest
export const makeSha3512: Maker = (primitive: Buffer): Sha3512 => {
  makeSureThat(
    primitiveIs64Bytes(primitive)
  )
  return {
    code: '0F',
    raw: primitive
  }
}
