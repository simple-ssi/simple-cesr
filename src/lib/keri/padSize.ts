// only valid pad sizes in KERI are 0, 1, or 2
export type PadSize = 0 | 1 | 2

// function to calculate the number of zeroed bytes required to properly encode a primitive.
// based on the raw primitive's size in bytes.
// see spec.
export const padSize = (bytes: number): PadSize => (3 - (bytes % 3)) % 3 as PadSize
