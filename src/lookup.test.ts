import { LookupByCodeFactory, LookupByDescriptionFactory } from './lookup'
import * as CodeTable from './codeTable'

describe('Default table:', () => {
  const lookupByCode = LookupByCodeFactory(CodeTable.defaultTable)
  const lookupByDescription = LookupByDescriptionFactory(CodeTable.defaultTable)
  test('Can lookup description by code', () => {
    const expected = 'two-byte'
    const actual = lookupByCode('M')
    expect(actual).toEqual(expected)
  })
  test('Can lookup code by description', () => {
    const expected = 'M'
    const actual = lookupByDescription('two-byte')
    expect(actual).toEqual(expected)
  })
})
