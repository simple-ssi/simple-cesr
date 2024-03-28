/* eslint-disable @typescript-eslint/no-var-requires */

export * as cesr from './src/api/api.js'

Object.assign(module.exports, require('./src/api/api.js')) // presumably for CommonJS
