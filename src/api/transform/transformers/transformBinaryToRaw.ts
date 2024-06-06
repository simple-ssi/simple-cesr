import { Binary } from '../../../core/domain/domains/binary.js'
import { Raw } from '../../../core/domain/domains/raw.js'
import { pipe } from '../../../lib/util/pipe.js'
import { transformBinaryToText } from './transformBinaryToText.js'
import { transformTextToRaw } from './transformTextToRaw.js'

export const transformBinaryToRaw = (binary: Binary): Raw =>
  pipe(
    binary,
    transformBinaryToText,
    transformTextToRaw
  )
