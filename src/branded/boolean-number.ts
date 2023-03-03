import { Branded } from './types'

export type BooleanNumber = Branded<number, 'BooleanNumber'>
export const BooleanNumber = {
  fromBoolean: (val: boolean) => {
    return (val ? 1 : 0) as BooleanNumber
  },
  fromInt: (val: number) => {
    if (val !== 0 && val !== 1) {
      throw new Error(`Val must be 0 or 1, current: ${val}`)
    }

    return val as BooleanNumber
  },
  fromString: (val: string) => {
    if (val !== '0' && val !== '1') {
      throw new Error(`Val must be 0 or 1, current: ${val}`)
    }

    return (val === '1' ? 1 : 0) as BooleanNumber
  }
}
