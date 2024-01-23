import * as R from 'remeda'
import { Buffer } from 'buffer'

type ByteCount = 2 | 4
type PaddedHex = string & { _type: 'paddedHex' }

const toHex = (n: number): string => n.toString(16)

const padHexForByteCount = (hex: string, count: ByteCount): PaddedHex => {
  let chars = hex.split('')
  while (chars.length < count * 2) chars = ['0', ...chars]
  return chars.join('') as PaddedHex
}

const splitHexIntoBytes = (paddedHex: PaddedHex): string[] => {
  return R.pipe(
    paddedHex,
    hex => hex.split(''),
    R.chunk(2), // creates subarrays of chars of length 2
    R.map(pair => pair.join('')) // join each of the pairs into two-character strings
  )
}

const toBytes = (hex: string[]): Buffer => {
  return R.pipe(
    hex,
    R.map(h => parseInt(h, 16)),
    bytes => Buffer.from(bytes)
  )
}

export default (n: number, count: ByteCount): Buffer => R.pipe(
  n,
  n => toHex(n),
  hex => padHexForByteCount(hex, count),
  paddedHex => splitHexIntoBytes(paddedHex),
  array => toBytes(array)
)
