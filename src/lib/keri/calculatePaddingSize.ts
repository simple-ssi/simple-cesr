// Function to calculate the padding size, as defined in spec
export const calculatePaddingSize = (bytes: number): number => (3 - (bytes % 3)) % 3
