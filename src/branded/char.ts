import { Branded } from './types'

export type Char<Max extends number, Min extends number> = Branded<string, `Char${Min}${Max}`>
export const CharFactory = {
  new: <Max extends number, Min extends number>(min: Min, max: Max) => {
    const fromString = (val: string): Char<Min, Max> => {
      if (val.length < min || val.length > max) {
        throw new Error(`Incorrect char range (${min}, ${max}) value ${val}`)
      }

      return val as Char<Min, Max>
    }

    return {
      fromString,
      fromInt: (val: number) => {
        return fromString(val.toString())
      }
    }
  }
}

export type Char15 = Char<0, 15>
export const Char15 = CharFactory.new(0, 15)

export type Char20 = Char<0, 20>
export const Char20 = CharFactory.new(0, 20)

export type Char25 = Char<0, 25>
export const Char25 = CharFactory.new(0, 25)

export type Char32 = Char<0, 32>
export const Char32 = CharFactory.new(0, 32)
