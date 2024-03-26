import { Buffer } from 'buffer'
import { Maker } from '../../maker.ts'
import { makeSureThat } from '../../validation/makeSureThat.ts'
import { itIs64Bytes } from '../../validation/validations/lengthIsRight.ts'
import { Ed25519Sig } from '../../../../core/primitive/primitives.ts'

// SHA3 512-bit digest
export const ed25519Sig: Maker = (primitive: Buffer): Ed25519Sig => {
  makeSureThat(
    itIs64Bytes(primitive)
  )
  return {
    code: '0B',
    raw: primitive
  }
}
