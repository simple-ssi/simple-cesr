export function calculatePadSize (bytes: number): number {
  return (3 - (bytes % 3)) % 3
}