export type Unbrand<T> = T extends string
  ? string
  : T extends number
  ? string
  : T extends boolean
  ? string
  : T extends Date
  ? Date
  : T extends Array<infer AT>
  ? AT[]
  : unknown

export type Branded<T, BTT extends string | symbol> = T & {
  readonly [key in BTT]: BTT
}
