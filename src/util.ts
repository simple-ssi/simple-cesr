import { CodeTableType, CodeType, PrimitiveDescriptionType } from './domain'

export function calculatePrePadBytes (bytes: number): number {
  return (3 - (bytes % 3)) % 3
}
