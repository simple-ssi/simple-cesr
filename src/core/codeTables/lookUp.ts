import { TypeCodeType } from '../typeCode'
import { PrimitiveDescriptionType } from '../primitive'
import { CodeTableType } from './codeTable'

export const LookupByCodeFactory = (table: CodeTableType) => (code: TypeCodeType) => lookupByCode(code, table)
export const LookupByDescriptionFactory = (table: CodeTableType) => (description: PrimitiveDescriptionType) => lookupByDescription(description, table)

const lookupByCode = (code: TypeCodeType, table: CodeTableType): PrimitiveDescriptionType => table.get(code) ?? 'NULL'

const lookupByDescription = (
  primitiveDescription: PrimitiveDescriptionType,
  table: CodeTableType): TypeCodeType => {
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
