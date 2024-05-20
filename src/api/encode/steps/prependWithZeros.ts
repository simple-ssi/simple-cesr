import { Buffer } from 'buffer/index.js'
import { PadSize, padSize } from '../../../lib/keri/padSize.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

export const prependWithZeros = (primitive: Buffer): Buffer => {
  const ps: PadSize = padSize(primitive.length)
  switch (ps) {
    case 0:
      return primitive
    case 1:
      return Buffer.concat([Buffer.from([0]), primitive])
    case 2:
      return Buffer.concat([Buffer.from([0, 0]), primitive])
  }
  return exhaustive(ps) // anything other than 0, 1, or 2 can't happen, we've covered all cases
}
