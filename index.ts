import { Buffer } from 'buffer'
import * as R from 'remeda'

import { rawToText } from './src/app/rawToText'
import { Raw } from './src/core/domain'
import { textToBinary } from './src/app/textToBinary'
import { binaryToRaw } from './src/app/binaryToRaw'
import { rawToBinary } from './src/app/rawToBinary'
import { binaryToText } from './src/app/binaryToText'
import { textToRaw } from './src/app/textToRaw'
import { RawPrimitive } from './src/core/primitive'
import { TextCode } from './src/core/textCode'

const toHex = (n: number): string => n.toString(16)

const padHex = (hex: string): string => {
  let chars = hex.split('')
  while (chars.length < 4) chars = ['0', ...chars]
  return chars.join('')
}

const splitHex = (hex: string): string[] => [hex.slice(0, 2), hex.slice(2)]

const toBytes = (hex: string[]): Buffer => {
  const byte1 = parseInt(hex[0], 16)
  const byte2 = parseInt(hex[1], 16)
  return Buffer.from([byte1, byte2])
}

const convertUnsignedShortToBytes = (short: number): Buffer => {
  const min = 0
  const max = Math.pow(256, 2) - 1 // to the 2nd power for two bytes
  if (min <= short && short <= max) {
    return R.pipe(
      short,
      n => toHex(n),
      hex => padHex(hex),
      hex => splitHex(hex),
      array => toBytes(array)
    )
  } else {
    throw new Error('Not a short number.')
  }
}

const retrievePrimative = (raw: Raw): any => {
  return R.pipe(
    raw[1],
    rp => rp.toString('hex'),
    s => parseInt(s, 16)
  )
}

const code = 'M'

const shorts = [0, 1, 65535, 17, 51, 1273, 345, 298, 2548, 3999, 20]

const processShort = (code: TextCode, short: number): number => {
  return R.pipe(
    short,
    p => convertUnsignedShortToBytes(p) as RawPrimitive,
    rp => [code, rp] as Raw,
    r => rawToText(r),
    t => textToBinary(t),
    b => binaryToRaw(b),
    r => rawToBinary(r),
    b => binaryToText(b),
    t => textToRaw(t),
    r => retrievePrimative(r)
  )
}

const results = shorts.map(n => processShort(code, n))

console.log(shorts, results)
