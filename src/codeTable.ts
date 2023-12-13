import { CodeType } from './code'
import { PrimitiveDescriptionType } from './primitive'

export type CodeTableType = Map<CodeType, PrimitiveDescriptionType>

const lookupByCode = (code: CodeType, table: CodeTableType): PrimitiveDescriptionType => table.get(code) ?? 'NULL'

const lookupByDescription = (
  primitiveDescription: PrimitiveDescriptionType,
  table: CodeTableType): CodeType => {
  // console.log(primitiveDescription)
  let returnCode
  table.forEach((description, code) => {
    // console.log(`[${code}, ${description}]`)
    if (description === primitiveDescription) {
      returnCode = code
    }
  })
  return returnCode ?? 'NULL'
}

const defaultTable = new Map([
  ['L', 'one-byte'],
  ['M', 'two-byte'],
  ['N', 'three-byte']
]) as CodeTableType

const LookupByCodeFactory = (table: CodeTableType) => (code: CodeType) => lookupByCode(code, table)
const LookupByDescriptionFactory = (table: CodeTableType) => (description: PrimitiveDescriptionType) => lookupByDescription(description, table)

export const Default = {
  table: defaultTable,
  lookupByCode: LookupByCodeFactory(defaultTable),
  lookupByDescription: LookupByDescriptionFactory(defaultTable)
}
