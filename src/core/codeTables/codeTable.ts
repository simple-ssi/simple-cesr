import { TypeCodeType } from '../typeCode'
import { PrimitiveDescriptionType } from '../primitive'
import { LookupByCodeFactory, LookupByDescriptionFactory } from './lookUp'

export type CodeTableType = Map<TypeCodeType, PrimitiveDescriptionType>

const defaultTable = new Map([
  ['M', 'short'],
  ['N', 'big']
]) as CodeTableType

export const Default = {
  table: defaultTable,
  lookupByCode: LookupByCodeFactory(defaultTable),
  lookupByDescription: LookupByDescriptionFactory(defaultTable)
}
