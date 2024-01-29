import { toText, toBinary, toRaw } from './everything'
import { Buffer } from 'buffer'

// start with a primitive like a short number
const primitive = 5478

// convert it to CESR Text -> should be a base64url string
const text = toText('M', primitive)
console.log(text)

// simulate sending it across the wire
const sendIt = (data: string): Buffer => toBinary(data)

// simulate receiving it across the wire by copying the return value of sendIt into a new const
const received = sendIt(text)
console.log(received)

// convert the received value to CESR Raw
const raw = toRaw(received)
console.log(raw)

// correctly convert the primitive from the Raw based on the code in the Raw -> primitive should match the original primitive
const parseRaw = (raw: { code: string, primitive: Buffer }): any => {
  switch (raw.code) {
    case 'M': return parseInt(raw.primitive.toString('hex'), 16)
    // deal with default case other than throwing an error
    default: throw new Error('unknown code')
  }
}

const parsedPrimitive = parseRaw(raw) as number

// use the primitive from the Raw in your program
if (parsedPrimitive === primitive) {
  console.log('success!')
} else {
  console.log(`failure: ${parsedPrimitive} !== ${primitive}`)
}
