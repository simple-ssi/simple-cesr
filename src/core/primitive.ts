export type RawPrimitive = Buffer & { _type: 'primitive' }
type RawPrimitiveBuilder = (primitive: Buffer) => RawPrimitive

export const shortBuilder: RawPrimitiveBuilder = (short: Buffer): RawPrimitive => {
  if (short.length === 2) {
    return short as RawPrimitive
  } else {
    console.log('Not a two-byte Short')
    throw new Error('Not a two-byte Short')
  }
}
