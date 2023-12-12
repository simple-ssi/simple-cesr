import { CodeTableType, CodeType, PrimitiveDescriptionType } from './primitive'

export const LookupByCodeFactory = (table: CodeTableType) => (code: CodeType) => lookupByCode(code, table)
export const LookupByDescriptionFactory = (table: CodeTableType) => (description: PrimitiveDescriptionType) => lookupByDescription(description, table)

function lookupByCode (code: CodeType, table: CodeTableType): PrimitiveDescriptionType {
  return table.get(code) ?? 'NULL'
}

function lookupByDescription (
  primitiveDescription: PrimitiveDescriptionType,
  table: CodeTableType): CodeType {
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
