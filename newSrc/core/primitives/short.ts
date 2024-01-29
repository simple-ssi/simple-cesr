import { TextCode } from '../codes/textCode'
import { NullPrimitive, makeNullPrimitive } from './null'

export interface Short { code: 'M', value: Buffer }

export const makeShort = (value: Buffer): Short | NullPrimitive => {
  // make sure value is 2 bytes
  if (value.length !== 2) return makeNullPrimitive()

  const code: TextCode = 'M'
  const short: Short = {
    code,
    value
  }
  return short
}
