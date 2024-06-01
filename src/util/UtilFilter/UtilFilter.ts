import { toPairs } from 'ramda'

export type FilterListKeyType = 'fjp' | 'rmDubious' | 'heo' | 'severe' | 'nonSevere'

export interface FilterListType {
  fjp: boolean;
  rmDubious: boolean;
  heo: boolean;
  severe: boolean;
  nonSevere: boolean;
}

export interface CurrentFilterListType {
  currentFilterList: FilterListType
}

export const ORDERED_FILTERS: FilterListType = {
  fjp: false,
  rmDubious: false,
  heo: false,
  severe: false,
  nonSevere: false,
}

export function isAnyFilterSet({ currentFilterList }: CurrentFilterListType) {
  return toPairs(currentFilterList).filter(([_, b]) => b).length > 0
}
