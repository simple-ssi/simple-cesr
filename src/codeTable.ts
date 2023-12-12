import { CodeTableType } from './primitive'

const defaultTable: CodeTableType = new Map([
  ['L', 'one-byte'],
  ['M', 'two-byte'],
  ['N', 'three-byte']
])

export { defaultTable }
