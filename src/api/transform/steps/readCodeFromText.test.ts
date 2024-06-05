import { readCodeFromText } from './readCodeFromText.js'

describe('Read Code From Text', () => {
  it('handles code length of one', () => {
    const text = 'MGrj'
    const actual = readCodeFromText(text)
    expect(actual).toStrictEqual('M')
  })
  it('handles code length of two', () => {
    const text = '0HGrjk23'
    const actual = readCodeFromText(text)
    expect(actual).toStrictEqual('0H')
  })
  it('handles code length of four', () => {
    const text = '1AAFRkJZ'
    const actual = readCodeFromText(text)
    expect(actual).toStrictEqual('1AAF')
  })
})
