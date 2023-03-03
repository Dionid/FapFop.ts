import { TimeHHMM } from './time'

const timeHHMMFn = (val: TimeHHMM) => {
  return val
}

const stringFn = (val: string) => {
  return val
}

describe('IntegerRange', () => {
  it('should work with integers', () => {
    // @ts-expect-error: Because it is not typed
    expect(timeHHMMFn('10')).toBe('10')

    expect(timeHHMMFn(TimeHHMM.fromString('0000'))).toBe('0000')
    expect(timeHHMMFn(TimeHHMM.fromString('0101'))).toBe('0101')
    expect(timeHHMMFn(TimeHHMM.fromString('2359'))).toBe('2359')

    expect(stringFn(TimeHHMM.fromString('2359'))).toBe('2359')

    expect(() => timeHHMMFn(TimeHHMM.fromString('2459'))).toThrow(Error)
    expect(() => timeHHMMFn(TimeHHMM.fromString('2360'))).toThrow(Error)
    expect(() => timeHHMMFn(TimeHHMM.fromString('-2360'))).toThrow(Error)
    expect(() => timeHHMMFn(TimeHHMM.fromString('-230'))).toThrow(Error)
  })
})
