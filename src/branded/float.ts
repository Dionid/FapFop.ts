import { Branded } from './branded'

// # UInt

// # NumberRange

export type FloatRange<Min extends number, Max extends number> = Branded<number, `FloatRange${Min}${Max}`>
export const FloatRangeFactory = {
  new: <Min extends number, Max extends number>(min: Min, max: Max) => {
    const fromNumber = (val: number): FloatRange<Min, Max> => {
      if (isNaN(val) || val < min || val > max) {
        throw new Error(`Incorrect float range (${min}, ${max}) value ${val}`)
      }

      return val as FloatRange<Min, Max>
    }
    return {
      fromNumber,
      fromString: (val: string): FloatRange<Min, Max> => {
        return fromNumber(parseFloat(val))
      }
    }
  }
}

// # FloatRange655353

export type FloatRange65535 = FloatRange<0, 655.35>
export const FloatRange65535 = FloatRangeFactory.new(0, 655.35)
