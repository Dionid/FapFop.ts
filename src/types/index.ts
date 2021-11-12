export type Maybe<T> = T | null
export type UnPromisify<T> = T extends Promise<infer U> ? U : T
