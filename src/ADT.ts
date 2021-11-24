import { Nominal, NominalDiscriminatedUnionHandlers } from './Nominal'

export type ProductType<T extends string | symbol = string | symbol, D extends Record<any, any> = Record<any, any>> = Nominal<T, D>

export const create = <T extends string | symbol, D>(type: T, data: D): ProductType<T, D> => Nominal.create<T, D>(type, data)
export const createC = <N extends ProductType>(type: N["type"]) => (data: N["data"]): ProductType<N["type"], N["data"]> => create(type, data)

export const createBehavior = <N extends ProductType>(type: N["type"]) => {
  return {
    create: createC<N>(type),
  }
}

export const ProductType = {
  create,
  createC,
  createBehavior,
}

export type SumType = ProductType
export type SumTypeHandlers<T extends SumType> = NominalDiscriminatedUnionHandlers<T>

export type match<ST extends SumType> = (st: ST, handlers: SumTypeHandlers<ST>) => ST
export const match = <ST extends SumType>(st: ST, handlers: SumTypeHandlers<ST>): ST => Nominal.match(st, handlers)

export const SumType = {
  match,
}
