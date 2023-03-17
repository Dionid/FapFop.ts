import { Branded } from './branded'

export type HexRange<Max extends number, Min extends number> = Branded<string, `Hex${Min}${Max}`>
export const HexRangeFactory = {
  new: <Max extends number, Min extends number>(min: Min, max: Max) => {
    const fromString = (strVal: string): HexRange<Min, Max> => {
      const val = parseInt(strVal, 16)

      if (isNaN(val) || val < min || val > max) {
        throw new Error(`Incorrect number range (${min}, ${max}) value ${val}`)
      }

      return val.toString(16) as HexRange<Min, Max>
    }

    return {
      fromString,
      fromInt: (val: number) => {
        return fromString(val.toString(16))
      }
    }
  }
}

export type Hex2 = HexRange<0, 255>
export const Hex2 = HexRangeFactory.new(0, 255)

export type Hex4 = HexRange<0, 65535>
export const Hex4 = HexRangeFactory.new(0, 65535)

export type Hex8 = HexRange<0, 4294967295>
export const Hex8 = HexRangeFactory.new(0, 4294967295)
