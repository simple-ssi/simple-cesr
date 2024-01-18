export type RawPrimitiveType = Buffer & { _type: 'primitive' }
export type PrimitiveConstructorType = (primitive: Buffer) => RawPrimitiveType
export type PrimitiveConstructorDictionaryType = Map<PrimitiveDescriptionType, PrimitiveConstructorType>
export type PrimitiveDescriptionType =
  'NULL' |
  'ed25519-seed' |
  'ed25519-prefix-public' |
  'x25519-public' |
  'ed25519-public' |
  'blake3-256' |
  'blake2b-256' |
  'blake2s-256' |
  'sha3-256' |
  'sha2-256' |
  'secp256k1-private' |
  'ed448-private' |
  'x448-public' |
  'short' |
  'big' |
  'x25519-private-decrypt' |
  'x25519-124-b64-44-qb64'

export const Short: PrimitiveConstructorType = (primitive: Buffer): RawPrimitiveType => {
  if (primitive.length === 2) {
    return primitive as RawPrimitiveType
  } else {
    console.log('Not a two-byte Short')
    throw new Error('Not a two-byte Short')
  }
}

// TEAR OUT ALL THIS PRIMITIVE DICTIONARY AND CONSTRUCTOR STUFF AND MAKE EXPLICIT PRIMITIVE TYPES - HOW TO TIE THEM TO THEIR
// DESCRIPTION STRING MORE ELEGANTLY?

export const primitiveConstructorDictionary = new Map([
  ['short', Short]
]) as PrimitiveConstructorDictionaryType
