import { MapDiscriminatedUnionHandlers, Union } from './Union'

export type Nominal<T extends string | symbol = string | symbol, D extends Record<any, any> = Record<any, any>> = {
  type: T
  data: D
}

export const Nominal = <T extends string | symbol, D>(type: T, data: D): Nominal<T, D> => {
  return {
    type,
    data
  }
}

export const curried =
  <N extends Nominal>(type: N['type']) =>
  (data: N['data']): Nominal<N['type'], N['data']> =>
    Nominal(type, data)

export type NominalDiscriminatedUnionHandlers<T extends Nominal> = MapDiscriminatedUnionHandlers<T, 'type'>
export const match = <DU extends Nominal>(du: DU, handlers: NominalDiscriminatedUnionHandlers<DU>): DU =>
  Union.match<DU, 'type'>(du, 'type', handlers)

Nominal.createC = curried
Nominal.match = match

export const NominalBuilder = <N extends Nominal>(type: N['type']) => {
  return {
    create: curried<N>(type)
  }
}
