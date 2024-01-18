import * as CodeTable from './codeTable'

describe('Default table:', () => {
  test('Can lookup description by code', () => {
    const expected = 'short'
    const actual = CodeTable.Default.lookupByCode('M')
    expect(actual).toEqual(expected)
  })
  test('Can lookup code by description', () => {
    const expected = 'M'
    const actual = CodeTable.Default.lookupByDescription('short')
    expect(actual).toEqual(expected)
  })
})
