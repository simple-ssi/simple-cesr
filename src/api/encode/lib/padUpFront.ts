import { Buffer } from 'buffer'
import { match } from 'ts-pattern'

// Only valid pad sizes are 0, 1, or 2
type PadSize = 0 | 1 | 2

// Formula from spec for calculating pad size
const padSize = (bytes: number): PadSize => ((3 - (bytes % 3)) % 3) as PadSize

export const padUpFront = (raw: Buffer): Buffer => {
  const ps = padSize(raw.length)
  return match(ps)
    .with(0, () => raw)
    .with(1, () => Buffer.concat([Buffer.from([0]), Buffer.from(raw)]))
    .with(2, () => Buffer.concat([Buffer.from([0, 0]), Buffer.from(raw)]))
    .exhaustive()
}
