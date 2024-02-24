import { encodeAsText } from './application/encode/encodeAsText'

// note: eventually this file should contain helpful demonstration code to help those working on the project
// ...as such, it should be noted in the README

const example = 'f8b8af8b7e172c3e5e367d6c3c5a2c5e3b4c5a6b7d8e9f0a1b2c3d4e5f601234'

const ecoded = encodeAsText('A', example)

console.log(ecoded)
