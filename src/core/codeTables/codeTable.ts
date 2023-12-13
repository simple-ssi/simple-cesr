import { CodeType } from '../code'
import { PrimitiveDescriptionType } from '../primitive'
import { LookupByCodeFactory, LookupByDescriptionFactory } from './lookUp'

export type CodeTableType = Map<CodeType, PrimitiveDescriptionType>

const defaultTable = new Map([
  ['L', 'one-byte'],
  ['M', 'two-byte'],
  ['N', 'three-byte']
]) as CodeTableType

export const Default = {
  table: defaultTable,
  lookupByCode: LookupByCodeFactory(defaultTable),
  lookupByDescription: LookupByDescriptionFactory(defaultTable)
}
