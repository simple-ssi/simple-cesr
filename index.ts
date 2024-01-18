import { buildRaw, buildBinary, Binary, buildText, Text, textToBinary, binaryToText, Raw } from './src/core/domain'
import { calculatePadSize } from './src/lib/util'

const primitive = Buffer.from('ffff', 'hex')
const raw = buildRaw('M', primitive)
const text = buildText(raw)
const binary = buildBinary(text)

function printIt (raw: Raw, text: Text, binary: Binary): void {
  console.log(raw)
  console.log(text)
  console.log(binary)
}

printIt(raw, text, binary)

const altBinary = textToBinary(text)
const altText = binaryToText(binary)

printIt(raw, altText, altBinary)

console.log(calculatePadSize(32))
console.log(calculatePadSize(64))

const b1 = Buffer.from('0001', 'hex')
console.log(`Buffer length is ${b1.length}`)
