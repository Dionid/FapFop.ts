import { Char, Char15, CharFactory } from './char'

const char1015Fn = (val: Char<10, 15>) => {
  return val
}

const char15Fn = (val: Char15) => {
  return val
}

const stringFn = (val: string) => {
  return val
}

describe('Char', () => {
  it('should work', () => {
    // @ts-expect-error: Because it is not typed
    expect(char15Fn('qwe')).toBe('qwe')
    // @ts-expect-error: Because it is not typed
    expect(char15Fn('')).toBe('')
    // @ts-expect-error: Because it is not typed
    expect(char15Fn('qwerty_qwerty_qwerty_qwerty')).toBe('qwerty_qwerty_qwerty_qwerty')

    expect(char15Fn(Char15.fromString('qwe'))).toBe('qwe')
    expect(char15Fn(Char15.fromString(''))).toBe('')
    expect(() => Char15.fromString('qwerty_qwerty_qwerty_qwerty')).toThrow(Error)

    expect(stringFn(Char15.fromString(''))).toBe('')

    expect(char1015Fn(CharFactory.new(10, 15).fromString('qwerty_qwerty'))).toBe('qwerty_qwerty')
    expect(() => char1015Fn(CharFactory.new(10, 15).fromString('qwe'))).toThrow(Error)
  })
})
