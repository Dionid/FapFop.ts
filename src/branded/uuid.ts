import { v4, validate } from 'uuid'

import { Branded } from './branded'

export type UUID = Branded<string, 'UUID'>
export const UuidFactory = <T extends UUID>() => {
  return {
    new: (): T => {
      return v4() as T
    },
    fromString: (id: string): T => {
      if (!validate(id)) {
        throw new Error('invalid uuid')
      }
      return id as T
    }
  }
}
