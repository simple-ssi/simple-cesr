import { Buffer } from 'buffer'
import { Short } from './primitives/short'

export type Primitive = Short
export type RawPrimitive = Buffer & { _type: 'primitive' }
export type RawPrimitiveBuilder = (primitive: Primitive) => RawPrimitive
