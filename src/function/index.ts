export * from './identity'
export * from './pipe'
export * from './curry'

import { Curry } from './curry'
import { Identity } from './identity'
import { Pipe } from './pipe'

export const Function = {
  Pipe,
  Identity,
  Curry,
}
