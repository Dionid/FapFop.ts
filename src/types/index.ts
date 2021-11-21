export * from './tuples'
export * from './array'

export type Maybe<T> = T | null
export type UnPromisify<T> = T extends Promise<infer U> ? U : T
export type Modify<T, R> = Omit<T, keyof R> & R
export type OptionalPromise<T> = T | Promise<T>
