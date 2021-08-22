export type CritterSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'X-Large' | 'Huge' | 'Long'
export type CritterSpeed = 'Stationary' | 'Very slow' | 'Slow' | 'Medium' | 'Fast' | 'Very fast'

export type CritterType = 'Bugs' | 'Fish' | 'Sea'
// eslint-disable-next-line prettier/prettier
export type Hour = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Status = 'new' | 'leaving' | 'incoming'

export interface BaseCritter {
  id: string
  name: string
  type: CritterType
  location: string
  size?: CritterSize
  speed?: CritterSpeed
  startTime: Hour | Hour[]
  endTime: Hour | Hour[]
  value: number
  northernMonths: Month[]
  southernMonths: Month[]
}
export type Critter = BaseCritter & {
  isAvailableNow?: boolean
  isLeaving?: boolean
  isNew?: boolean
  isIncoming?: boolean
  months: Month[]
}
