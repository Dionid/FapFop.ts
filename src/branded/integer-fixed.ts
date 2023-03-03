import { Branded } from './types'

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntegerRangeFixed<Min extends number, Max extends number> = Branded<
  Exclude<Enumerate<Max>, Enumerate<Min>>,
  `IntegerRange${Min}${Max}`
>

export const IntegerRangeFixedFactory = {
  new: <Min extends number, Max extends number>(min: Min, max: Max) => {
    const fromInt = (val: number): IntegerRangeFixed<Min, Max> => {
      if (!Number.isSafeInteger(val) || isNaN(val) || val < min || val >= max) {
        throw new Error(`Incorrect number range (${min}, ${max}) value ${val}`)
      }

      return val as unknown as IntegerRangeFixed<Min, Max>
    }
    return {
      array: (): Exclude<Enumerate<Max>, Enumerate<Min>>[] => {
        const arr = []
        for (let i = 0; i < max - min; i++) {
          arr.push(min + i)
        }
        return arr as Exclude<Enumerate<Max>, Enumerate<Min>>[]
      },
      fromInt,
      fromString: (val: string): IntegerRangeFixed<Min, Max> => {
        return fromInt(parseInt(val))
      },
      fromHexString: (val: string): IntegerRangeFixed<Min, Max> => {
        return fromInt(parseInt(val, 16))
      }
    }
  }
}
