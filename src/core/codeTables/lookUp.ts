import { CodeType } from '../code'
import { PrimitiveDescriptionType } from '../primitive'
import { CodeTableType } from './codeTable'

export const LookupByCodeFactory = (table: CodeTableType) => (code: CodeType) => lookupByCode(code, table)
export const LookupByDescriptionFactory = (table: CodeTableType) => (description: PrimitiveDescriptionType) => lookupByDescription(description, table)

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
