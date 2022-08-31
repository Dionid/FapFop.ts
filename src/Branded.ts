export const BrandedToken = Symbol('BrandedToken')

export type Branded<T, BTT extends string | symbol> = T & {
  readonly [BrandedToken]: BTT
}

type Primitive = string | number | boolean | Date | string[] | number[] | boolean[] | Date[] | null | Buffer
export type BrandedPrimitive<Type extends Primitive, BTT extends string | symbol> = Branded<Type, BTT>
