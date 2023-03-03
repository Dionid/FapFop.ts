import { IntegerRange, IntegerRangeFactory, UInt8 } from './integer'

const integer1015Fn = (val: IntegerRange<10, 15>) => {
  return val
}

const UInt8Fn = (val: UInt8) => {
  return val
}

const integerFn = (val: number) => {
  return val
}

describe('IntegerRange', () => {
  it('should work with integers', () => {
    // @ts-expect-error: Because it is not typed
    expect(UInt8Fn(10)).toBe(10)
    // @ts-expect-error: Because it is not typed
    expect(UInt8Fn(1)).toBe(1)
    // @ts-expect-error: Because it is not typed
    expect(UInt8Fn(-1)).toBe(-1)

    expect(UInt8Fn(UInt8.fromInt(10))).toBe(10)
    expect(UInt8Fn(UInt8.fromInt(0))).toBe(0)
    expect(() => UInt8.fromInt(256)).toThrow(Error)
    expect(() => UInt8.fromInt(-1)).toThrow(Error)

    expect(integerFn(UInt8.fromInt(10))).toBe(10)

    expect(integer1015Fn(IntegerRangeFactory.new(10, 15).fromInt(10))).toBe(10)
    expect(() => integer1015Fn(IntegerRangeFactory.new(10, 15).fromInt(20))).toThrow(Error)
  })
  it('should work with strings', () => {
    expect(UInt8Fn(UInt8.fromString('10'))).toBe(10)
    expect(UInt8Fn(UInt8.fromString('0'))).toBe(0)
    expect(() => UInt8.fromString('256')).toThrow(Error)
    expect(() => UInt8.fromString('-1')).toThrow(Error)
    expect(() => UInt8.fromString('')).toThrow(Error)
    expect(() => UInt8.fromString('qwerty')).toThrow(Error)

    expect(integerFn(UInt8.fromString('10'))).toBe(10)

    expect(integer1015Fn(IntegerRangeFactory.new(10, 15).fromString('10'))).toBe(10)
    expect(() => integer1015Fn(IntegerRangeFactory.new(10, 15).fromString('20'))).toThrow(Error)
  })
  it('should work with hex strings', () => {
    expect(UInt8Fn(UInt8.fromHexString('FF'))).toBe(255)
    expect(UInt8Fn(UInt8.fromHexString('AA'))).toBe(170)
    expect(() => UInt8.fromHexString('256')).toThrow(Error)
    expect(() => UInt8.fromHexString('-F')).toThrow(Error)
    expect(() => UInt8.fromHexString('')).toThrow(Error)
    // QUESTION: parseInt creating 10 from "aq"...
    expect(UInt8.fromHexString('aq')).toBe(10)

    expect(integerFn(UInt8.fromHexString('10'))).toBe(16)

    expect(integer1015Fn(IntegerRangeFactory.new(10, 15).fromHexString('A'))).toBe(10)
    expect(() => integer1015Fn(IntegerRangeFactory.new(10, 15).fromHexString('12'))).toThrow(Error)
  })
})
