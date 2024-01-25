import { buildShort } from '../primitives/short'
import { buildBinaryFromText } from './binary'
import { buildRaw } from './raw'
import { buildTextFromBinary, buildTextFromRaw } from './text'

describe('Text Domain', () => {
  test('Build Text from Raw', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const expected = 'MAAB'
    const actual = buildTextFromRaw(raw)
    expect(expected).toEqual(actual)
  })
  test('Build Text from Binary', () => {
    const shortValue = 1
    const short = buildShort(shortValue)
    const raw = buildRaw('M', short)
    const text = buildTextFromRaw(raw)
    const binary = buildBinaryFromText(text)
    const expected = 'MAAB'
    const actual = buildTextFromBinary(binary)
    expect(expected).toEqual(actual)
  })
})
