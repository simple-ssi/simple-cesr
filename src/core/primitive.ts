import { Buffer } from 'buffer'

export type RawPrimitive = Buffer & { _type: 'primitive' }
export type RawPrimitiveBuilder = (primitive: Buffer) => RawPrimitive
