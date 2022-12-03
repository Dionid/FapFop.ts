import { Nominal, NominalDiscriminatedUnionHandlers } from './Nominal'

export type ProductType<
  T extends string | symbol = string | symbol,
  D extends Record<any, any> = Record<any, any>
> = Nominal<T, D>

export const ProductType = <T extends string | symbol, D extends Record<any, any>>(
  type: T,
  data: D
): ProductType<T, D> => Nominal<T, D>(type, data)

export const curried =
  <N extends ProductType>(type: N['type']) =>
  (data: N['data']): ProductType<N['type'], N['data']> =>
    ProductType(type, data)

ProductType.curried = curried

export const ProductTypeBuilder = <N extends ProductType>(type: N['type']) => {
  return curried<N>(type)
}

export type SumType = ProductType
export type SumTypeHandlers<T extends SumType> = NominalDiscriminatedUnionHandlers<T>

export type match<ST extends SumType> = (st: ST, handlers: SumTypeHandlers<ST>) => ST
export const match = <ST extends SumType>(st: ST, handlers: SumTypeHandlers<ST>): ST => Nominal.match(st, handlers)

export const SumType = {
  match
}
