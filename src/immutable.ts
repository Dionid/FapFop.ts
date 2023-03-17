export type ImmutableArray<T> = ReadonlyArray<T>
export type ImmutableRecord<T extends Record<any, any>> = Readonly<T>

export type Immutable<T> = T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Record<any, any>
  ? ImmutableRecord<T>
  : T extends Map<infer MK, infer MV>
  ? ReadonlyMap<MK, MV>
  : T extends Set<infer SK>
  ? ReadonlySet<SK>
  : never

export type Mutable<T> = T extends ReadonlyArray<infer U>
  ? Array<U>
  : T extends Readonly<T>
  ? {
      -readonly [P in keyof T]: T[P]
    }
  : T extends ReadonlyMap<infer MK, infer MV>
  ? Map<MK, MV>
  : T extends ReadonlySet<infer SK>
  ? Set<SK>
  : never

export const delta = <F extends Record<PropertyKey, any>, T extends Record<PropertyKey, any>>(from: F, to: T) => {
  // @ts-expect-error: why TS? why?
  if (from === to) {
    return to
  }

  const keysSet = new Set<keyof T & keyof F>([...Object.keys(from), ...Object.keys(to)])

  const delta = [...keysSet].reduce<Partial<F & T>>((acc, key) => {
    const toValue = to[key]
    const fromValue = from[key]

    if (toValue === undefined) {
      acc[key] = fromValue
    } else if (fromValue === undefined) {
      acc[key] = toValue
    } else {
      acc[key] = toValue
    }

    return acc
  }, {})

  return delta
}

export const Immutable = {
  delta
}
