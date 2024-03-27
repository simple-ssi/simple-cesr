import { encodeText } from './api/encode/encoders/encodeText.js'

console.log('Welcome to simple-cesr!')
console.log("We'll be doing amazing things like this:")

const primitive = new Uint8Array([0x00, 0x01]) // two bytes
console.log('Primitive:', primitive)
const encoded = encodeText('M', primitive)
console.log('Encoded:', encoded)
