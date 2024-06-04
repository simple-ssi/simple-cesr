import { Buffer } from 'buffer/index.js'
import { PadSize, padSize as ps } from '../../../lib/keri/padSize.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

const prependWithNothing = (primitive: Buffer): Buffer => primitive
const prependWithZero = (primitive: Buffer): Buffer => Buffer.concat([Buffer.from([0]), primitive])
const prependWithTwoZeros = (primitive: Buffer): Buffer => Buffer.concat([Buffer.from([0, 0]), primitive])

export const prependWithZeros = (primitive: Buffer): Buffer => {
  const padSize: PadSize = ps(primitive.length)
  return padSize === 0
    ? prependWithNothing(primitive)
    : padSize === 1
      ? prependWithZero(primitive)
      : padSize === 2
        ? prependWithTwoZeros(primitive)
        : exhaustive(padSize)
}
