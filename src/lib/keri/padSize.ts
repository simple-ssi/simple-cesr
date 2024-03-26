// function to calculate the padding size, as defined in spec
export const padSize = (bytes: number): number => (3 - (bytes % 3)) % 3
