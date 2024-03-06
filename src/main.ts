import { encodeAsText } from './api/encode/encodeAsText.ts'

// note: eventually this file should contain helpful demonstration code to help those working on the project
// ...as such, it should be noted in the README

// const example = '02b4f97f6e8e9214e9a2021b2c7ad6f2233499f114fed33ea6bfc3e2b1feaf24c1' // compressed key -> 33 bytes long

// const encoded = encodeAsText('1AAB', example)

const example = 'c6e64b12b9fe842c'
const encoded = encodeAsText('N', Buffer.from(example, 'hex'))

console.log(encoded)
