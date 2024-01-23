import * as R from 'remeda'
import { Buffer } from 'buffer'

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

export default (n: number): Buffer => R.pipe(
  n,
  n => toHex(n),
  hex => padHex(hex),
  hex => splitHex(hex),
  array => toBytes(array)
)
