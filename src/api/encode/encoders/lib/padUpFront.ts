import { Buffer } from 'buffer'
import { match } from 'ts-pattern'
import { Raw } from '../../../../core/domain/domains.ts'
import { calculatePaddingSize } from '../../../../lib/keri/calculatePaddingSize.ts'

// only valid pad sizes are 0, 1, or 2
type PadSize = 0 | 1 | 2

// calculate the padding size
const ps = (bytes: number): PadSize => calculatePaddingSize(bytes) as PadSize

// pad the primitive (as a byte array) with the correct number of bytes up front
export const padUpFront = (primitive: Buffer): Buffer => {
  const padSize = ps(primitive.length)
  return match(padSize)
    .with(0, () => primitive)
    .with(1, () => Buffer.concat([Buffer.from([0]), primitive]))
    .with(2, () => Buffer.concat([Buffer.from([0, 0]), primitive]))
    .exhaustive()
}
