import { Branded } from './types'

export type TimeHHMM = Branded<string, 'TimeHHMM'>
export const TimeHHMM = {
  fromString: (val: string): TimeHHMM => {
    if (val.length > 4) {
      throw new Error('TimeHHMM must have only 4 symbols')
    }

    const hh = parseInt(val.substring(0, 2))
    const mm = parseInt(val.substring(2, 4))

    if (isNaN(hh) || isNaN(mm) || hh < 0 || hh > 23 || mm < 0 || mm > 59) {
      throw new Error(`TimeHHMM is incorrect: ${hh}${mm}`)
    }

    return val as TimeHHMM
  }
}

export type TimeMMDDHHmm = Branded<string, 'TimeMMDDHHmm'>

export const TimeMMDDHHmm = {
  fromString: (val: string): TimeMMDDHHmm => {
    if (val.length > 8) {
      throw new Error('TimeHHMM must have only 8 symbols')
    }

    const MM = parseInt(val.substring(0, 2))
    const DD = parseInt(val.substring(2, 4))
    const HH = parseInt(val.substring(4, 6))
    const mm = parseInt(val.substring(6, 8))

    if (
      isNaN(MM) ||
      isNaN(DD) ||
      isNaN(HH) ||
      isNaN(mm) ||
      MM < 1 ||
      MM > 12 ||
      DD < 0 ||
      DD > 31 ||
      HH < 0 ||
      HH > 23 ||
      mm < 0 ||
      mm > 59
    ) {
      throw new Error(`TimeMMDDHHmm is incorrect: ${MM}${DD}${HH}${mm}`)
    }

    return val as TimeMMDDHHmm
  }
}
