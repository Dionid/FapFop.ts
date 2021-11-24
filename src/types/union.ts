export type DiscriminateUnion<T, K extends keyof T, V extends T[K]> =
  T extends Record<K, V> ? T : never

export type MapDiscriminatedUnion<T extends Record<K, any>, K extends keyof T> =
  { [V in T[K]]: DiscriminateUnion<T, K, V> };

export type DiscriminateUnionHandler<T, K extends keyof T, V extends T[K]> =
  T extends Record<K, V> ? (t: T) => T : never

export type MapDiscriminatedUnionHandlers<T extends Record<K, any>, K extends keyof T> =
  { [V in T[K]]: DiscriminateUnionHandler<T, K, V> };


export type match<DU extends Record<K, any>, K extends keyof DU> = (du: DU, key: K, handlers: MapDiscriminatedUnionHandlers<DU, K>) => DU
export const match = <DU extends Record<K, any>, K extends keyof DU>(du: DU, key: K, handlers: MapDiscriminatedUnionHandlers<DU, K>): DU => {
  if (handlers[du[key]]) {
    // @ts-ignore
    return handlers[du[key]](du)
  }

  throw new Error(`There is no appropriate handler for Discriminate Union ${du} with key ${key} ${handlers}`)
}

export type matchC<DU extends Record<K, any>, K extends keyof DU> = (du: DU, handlers: MapDiscriminatedUnionHandlers<DU, K>) => DU
export const matchC = <DU extends Record<K, any>, K extends keyof DU>(key: K): matchC<DU, K> => {
  return (du: DU, handlers: MapDiscriminatedUnionHandlers<DU, K>) => {
    return match(du, key, handlers)
  }
}

export const Union = {
  match,
  matchC,
}
