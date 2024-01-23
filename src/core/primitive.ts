import { Buffer } from 'buffer'
import { Short, buildRawShort } from './primitives/short'
import { Long, buildRawLong } from './primitives/long'
import { TextCode } from './textCode'

export type Primitive = Short | Long
export type PrimitiveBuilder = (value: any) => Primitive
export type RawPrimitive = Buffer & { _type: 'primitive' }
export type RawPrimitiveBuilder = (primitive: Short | Long) => RawPrimitive

export const primitiveBuilderFactory = (code: TextCode): RawPrimitiveBuilder => {
  if (code === 'M') return buildRawShort
  else if (code === 'N') return buildRawLong
  else throw new Error('Not a valid Text Code.')
}
