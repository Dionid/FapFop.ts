import { MapDiscriminatedUnionHandlers, Union } from '../types/union'

export type Nominal<T extends string | symbol = string | symbol, D extends Record<any, any> = Record<any, any>> = {
  type: T,
  data: D
}

export const create = <T extends string | symbol, D>(type: T, data: D): Nominal<T, D> => {
  return {
    type,
    data
  }
}

export const createC = <N extends Nominal>(type: N["type"]) => (data: N["data"]): Nominal<N["type"], N["data"]> => create(type, data)

export const createBehavior = <N extends Nominal>(type: N["type"]) => {
  return {
    create: createC<N>(type),
  }
}

export type NominalDiscriminatedUnionHandlers<T extends Nominal> = MapDiscriminatedUnionHandlers<T, "type">
export const match = <DU extends Nominal>(du: DU, handlers: NominalDiscriminatedUnionHandlers<DU>): DU => Union.match<DU, "type">(du, "type", handlers)

export const Nominal = {
  create,
  createC,
  createBehavior,
  match,
}
