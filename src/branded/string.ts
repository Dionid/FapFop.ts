import { Branded } from './branded'

export type NotEmptyString = Branded<string, 'NotEmptyString'>
export const NotEmptyString = {
  fromString: (val: string) => {
    if (val.length === 0) {
      throw new Error('String must not be empty')
    }

    return val as NotEmptyString
  }
}
