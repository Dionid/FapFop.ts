import { HexRange, HexRangeFactory, Hex2 } from './hex'

const hex1015Fn = (val: HexRange<10, 15>) => {
  return val
}

const Hex2Fn = (val: Hex2) => {
  return val
}

const hexFn = (val: string) => {
  return val
}

describe('HexRange', () => {
  it('should work with hex', () => {
    // @ts-expect-error: Because it is not typed
    expect(Hex2Fn(10)).toBe(10)
    // @ts-expect-error: Because it is not typed
    expect(Hex2Fn(1)).toBe(1)
    // @ts-expect-error: Because it is not typed
    expect(Hex2Fn(-1)).toBe(-1)

    expect(Hex2Fn(Hex2.fromInt(10))).toBe('a')
    expect(Hex2Fn(Hex2.fromInt(0))).toBe('0')
    expect(() => Hex2.fromInt(256)).toThrow(Error)
    expect(() => Hex2.fromInt(-1)).toThrow(Error)

    expect(hexFn(Hex2.fromInt(10))).toBe('a')

    expect(hex1015Fn(HexRangeFactory.new(10, 15).fromInt(10))).toBe('a')
    expect(() => hex1015Fn(HexRangeFactory.new(10, 15).fromInt(20))).toThrow(Error)
  })
  it('should work with strings', () => {
    expect(Hex2Fn(Hex2.fromString('10'))).toBe('10')
    expect(Hex2Fn(Hex2.fromString('0'))).toBe('0')
    expect(() => Hex2.fromString('256')).toThrow(Error)
    expect(() => Hex2.fromString('-1')).toThrow(Error)
    expect(() => Hex2.fromString('')).toThrow(Error)
    expect(() => Hex2.fromString('qwerty')).toThrow(Error)

    expect(hexFn(Hex2.fromString('10'))).toBe('10')

    expect(hex1015Fn(HexRangeFactory.new(10, 15).fromString('a'))).toBe('a')
    expect(() => hex1015Fn(HexRangeFactory.new(10, 15).fromString('10'))).toThrow(Error)
  })
  it('should work with hex strings', () => {
    expect(Hex2Fn(Hex2.fromString('FF'))).toBe('ff')
    expect(Hex2Fn(Hex2.fromString('AA'))).toBe('aa')
    expect(() => Hex2.fromString('256')).toThrow(Error)
    expect(() => Hex2.fromString('-F')).toThrow(Error)
    expect(() => Hex2.fromString('')).toThrow(Error)
    expect(Hex2.fromString('aq')).toBe('a')

    expect(hexFn(Hex2.fromString('10'))).toBe('10')

    expect(hex1015Fn(HexRangeFactory.new(10, 15).fromString('a'))).toBe('a')
    expect(() => hex1015Fn(HexRangeFactory.new(10, 15).fromString('12'))).toThrow(Error)
  })
})
