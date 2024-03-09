import { PrimitiveWrongLength } from '../../error.ts'
import { Validation } from '../Validation.ts'

export const validateLength = (length: number) =>
  (primitive: Buffer): Validation =>
    () => {
      if (primitive.length !== length) throw new PrimitiveWrongLength()
      return true
    }

export const validateLengthIs33Bytes = validateLength(33)
