
import { Buffer } from 'buffer'
import convertNumberToBytes from '../helpers/convertNumberToBytes'
import countBits from '../helpers/countBits'

export type Short = number & { _type: 'short' }

export const buildShort = (value: number): Short => {
  // must not be greater than 2 bytes or 16 bits
  if (countBits(value) <= 16) {
    return value as Short
  } else {
    throw new Error('Not a short number.')
  }
}

export const buildRawShort = (short: Short): Buffer => convertNumberToBytes(short)
