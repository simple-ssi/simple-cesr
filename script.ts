import fs from 'fs'

import { standards } from './testing/standardsTest/standards.ts'

// this script contains the sizage information from Matter. Use it to calculate the raw bytes and padding size for each primitive type

interface Sizage {
  hs: number
  ss: number
  fs: number
  ls: number
}

type Tuple = [code: string, makeSignage: Sizage]

// Algorithm from Matter
const calculateRawBytes = (sizage: Sizage): number => {
  const cs = sizage.hs + sizage.ss
  return Math.floor(((sizage.fs - cs) * 3) / 4) - sizage.ls
}

const calculatePaddingSize = (bytes: number): number => (3 - (bytes % 3)) % 3

const calculateCodeSize = (bytes: number): number =>
  calculatePaddingSize(bytes) !== 0
    ? calculatePaddingSize(bytes)
    : 4

// Copying data structures from Matter
const makeSizage = (hs: number, ss: number, fs: number, ls: number): Sizage => ({ hs, ss, fs, ls })

// From Matter
const tuples: Tuple[] =
  [['A', makeSizage(1, 0, 44, 0)],
    ['B', makeSizage(1, 0, 44, 0)],
    ['C', makeSizage(1, 0, 44, 0)],
    ['D', makeSizage(1, 0, 44, 0)],
    ['E', makeSizage(1, 0, 44, 0)],
    ['F', makeSizage(1, 0, 44, 0)],
    ['G', makeSizage(1, 0, 44, 0)],
    ['H', makeSizage(1, 0, 44, 0)],
    ['I', makeSizage(1, 0, 44, 0)],
    ['J', makeSizage(1, 0, 44, 0)],
    ['K', makeSizage(1, 0, 76, 0)],
    ['L', makeSizage(1, 0, 76, 0)],
    ['M', makeSizage(1, 0, 4, 0)],
    ['N', makeSizage(1, 0, 12, 0)],
    ['O', makeSizage(1, 0, 44, 0)],
    ['P', makeSizage(1, 0, 124, 0)],
    ['Q', makeSizage(1, 0, 44, 0)],
    ['0A', makeSizage(2, 0, 24, 0)],
    ['0B', makeSizage(2, 0, 88, 0)],
    ['0C', makeSizage(2, 0, 88, 0)],
    ['0D', makeSizage(2, 0, 88, 0)],
    ['0E', makeSizage(2, 0, 88, 0)],
    ['0F', makeSizage(2, 0, 88, 0)],
    ['0G', makeSizage(2, 0, 88, 0)],
    ['0H', makeSizage(2, 0, 8, 0)],
    ['0I', makeSizage(2, 0, 88, 0)],
    ['1AAA', makeSizage(4, 0, 48, 0)],
    ['1AAB', makeSizage(4, 0, 48, 0)],
    ['1AAC', makeSizage(4, 0, 80, 0)],
    ['1AAD', makeSizage(4, 0, 80, 0)],
    ['1AAE', makeSizage(4, 0, 56, 0)],
    ['1AAF', makeSizage(4, 0, 8, 0)],
    ['1AAG', makeSizage(4, 0, 36, 0)],
    ['1AAH', makeSizage(4, 0, 100, 0)],
    ['1AAI', makeSizage(4, 0, 48, 0)],
    ['1AAJ', makeSizage(4, 0, 48, 0)]]

// Get all the examples from Matter used by the Standards Test, calculate their size in bytes and record it with its code as a key

interface Value { text: string, raw: string }

interface Example {
  code: string
  length: number
  values: Value[]

}

const raws = new Map<string, number[]>()
standards.matter.forEach((padSize) => {
  padSize.examples.forEach((exampleTherein: Example) => {
    const sizes: number[] = []
    exampleTherein.values.forEach((valueFound: Value) => {
      // everything is a hex string
      const bytes = Buffer.from(valueFound.raw, 'hex').length
      sizes.push(bytes)
    })
    const code = exampleTherein.code
    raws.set(code, sizes)
  })
})

let output = ''
tuples.forEach((tuple: Tuple) => {
  const code = tuple[0]
  const bytes = calculateRawBytes(tuple[1])
  const rawsString = JSON.stringify(raws.get(code))
  output += `${code}: ${bytes} bytes, example sizes => ${rawsString}, code size ${calculateCodeSize(bytes)}\n`
})
fs.writeFile('bytes.txt', output, (err) => {
  if (err != null) throw err
  console.log('Data written to file')
})
