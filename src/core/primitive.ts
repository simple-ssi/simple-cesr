import { Buffer } from 'buffer'
import { Short, buildRawShort, buildShort } from './primitives/short'
import { TextCode } from './textCode'

export type Primitive = Short
export type PrimitiveBuilder = (value: any) => Primitive
export type RawPrimitive = Buffer & { _type: 'primitive' }
export type RawPrimitiveBuilder = (primitive: Primitive) => RawPrimitive

export const primitiveBuilderFactory = (code: TextCode): RawPrimitiveBuilder => {
  if (code === 'M') return buildRawShort as RawPrimitiveBuilder
  else throw new Error('Not a valid Text Code.')
}
