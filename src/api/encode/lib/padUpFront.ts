import { Buffer } from 'buffer/index.js'
// import { match } from 'ts-pattern'
import { padSize } from '../../../lib/keri/padSize.js'
import { exhaustive } from '../../../lib/util/exhaustive.js'

// only valid pad sizes in KERI are 0, 1, or 2
type PadSize = 0 | 1 | 2

// calculate the pad size
const ps = (bytes: number): PadSize => padSize(bytes) as PadSize // will return 0, 1, or 2

// prepend (pad up front) the primitive (as a byte array) with the correct number of bytes
export const padUpFront = (primitive: Buffer): Buffer => {
  const padSize: PadSize = ps(primitive.length)
  switch (padSize) {
    case 0:
      return primitive
    case 1:
      return Buffer.concat([Buffer.from([0]), primitive])
    case 2:
      return Buffer.concat([Buffer.from([0, 0]), primitive])
    default:
      return exhaustive(padSize) // anything other than 0, 1, or 2 can't happen, we've covered all cases
  }
}
// {
//   const padSize = ps(primitive.length)
//   return match(padSize)
//     .with(0, () => primitive)
//     .with(1, () => Buffer.concat([Buffer.from([0]), primitive]))
//     .with(2, () => Buffer.concat([Buffer.from([0, 0]), primitive]))
//     .exhaustive()
// }
