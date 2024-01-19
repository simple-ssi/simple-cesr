import { Text, buildRawFromText } from './src/core/domain'

const text = 'MAAA' as Text
const raw = buildRawFromText(text)
console.log(raw)
