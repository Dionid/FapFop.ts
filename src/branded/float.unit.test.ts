import { FloatRange, FloatRange65535, FloatRangeFactory } from './float'

const float1015Fn = (val: FloatRange<10, 15>) => {
  return val
}

const FloatRange65535Fn = (val: FloatRange65535) => {
  return val
}

const floatFn = (val: number) => {
  return val
}

describe('FloatRange', () => {
  it('should work with floats', () => {
    // @ts-expect-error: Because it is not typed
    expect(FloatRange65535Fn(10.1)).toBe(10.1)

    expect(FloatRange65535Fn(FloatRange65535.fromNumber(10.1))).toBe(10.1)
    expect(FloatRange65535Fn(FloatRange65535.fromNumber(0.1))).toBe(0.1)
    expect(() => FloatRange65535.fromNumber(655.36)).toThrow(Error)
    expect(() => FloatRange65535.fromNumber(-1)).toThrow(Error)

    expect(floatFn(FloatRange65535.fromNumber(10.1))).toBe(10.1)

    expect(float1015Fn(FloatRangeFactory.new(10.0, 15.0).fromNumber(10.0))).toBe(10.0)
    expect(() => float1015Fn(FloatRangeFactory.new(10.0, 15.0).fromNumber(20))).toThrow(Error)
  })
  it('should work with strings', () => {
    expect(FloatRange65535Fn(FloatRange65535.fromString('10.10'))).toBe(10.1)
    expect(FloatRange65535Fn(FloatRange65535.fromString('0.10'))).toBe(0.1)
    expect(() => FloatRange65535.fromString('655.36')).toThrow(Error)
    expect(() => FloatRange65535.fromString('-1')).toThrow(Error)

    expect(floatFn(FloatRange65535.fromString('10.10'))).toBe(10.1)

    expect(float1015Fn(FloatRangeFactory.new(10.0, 15.0).fromString('10.00'))).toBe(10.0)
    expect(() => float1015Fn(FloatRangeFactory.new(10.0, 15.0).fromString('20.00'))).toThrow(Error)
  })
})
