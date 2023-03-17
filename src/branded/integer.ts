import { Branded } from './branded'

// # UInt

// # NumberRange

export type IntegerRange<Min extends number, Max extends number> = Branded<number, `IntegerRange${Min}${Max}`>
export const IntegerRangeFactory = {
  new: <Min extends number, Max extends number>(min: Min, max: Max) => {
    const fromInt = (val: number): IntegerRange<Min, Max> => {
      if (!Number.isSafeInteger(val) || isNaN(val) || val < min || val > max) {
        throw new Error(`Incorrect number range (${min}, ${max}) value ${val}`)
      }

      return val as IntegerRange<Min, Max>
    }
    return {
      fromInt,
      fromString: (val: string): IntegerRange<Min, Max> => {
        return fromInt(parseInt(val))
      },
      fromHexString: (val: string): IntegerRange<Min, Max> => {
        return fromInt(parseInt(val, 16))
      }
    }
  }
}

// # UInt2

export type UInt2 = IntegerRange<0, 3>
export const UInt2 = IntegerRangeFactory.new(0, 3)

// # UInt4

export type UInt4 = IntegerRange<0, 15>
export const UInt4 = IntegerRangeFactory.new(0, 15)

// # UInt8

export type UInt8 = IntegerRange<0, 255>
export const UInt8 = IntegerRangeFactory.new(0, 255)

// # UInt16

export type UInt16 = IntegerRange<0, 65535>
export const UInt16 = IntegerRangeFactory.new(0, 65535)

// # UInt31

export type UInt31 = IntegerRange<0, 2147483648>
export const UInt31 = IntegerRangeFactory.new(0, 2147483648)

// # UInt32

export type UInt32 = IntegerRange<0, 4294967295>
export const UInt32 = IntegerRangeFactory.new(0, 4294967295)
