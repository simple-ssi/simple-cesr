import * as CodeTable from './codeTable'

describe('Default table:', () => {
  test('Can lookup description by code', () => {
    const expected = 'two-byte'
    const actual = CodeTable.Default.lookupByCode('M')
    expect(actual).toEqual(expected)
  })
  test('Can lookup code by description', () => {
    const expected = 'M'
    const actual = CodeTable.Default.lookupByDescription('two-byte')
    expect(actual).toEqual(expected)
  })
})
