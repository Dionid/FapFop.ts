import { curry, curry2, curry3 } from './curry'
import { flip } from './flip'
import { identity, identityAsync } from './identity'
import { pipe, pipeAsync } from './pipe'

export * from './identity'
export * from './pipe'

export const Function = {
  flip,
  pipe,
  pipeAsync,
  identity,
  identityAsync,
  curry,
  curry2,
  curry3,
}
