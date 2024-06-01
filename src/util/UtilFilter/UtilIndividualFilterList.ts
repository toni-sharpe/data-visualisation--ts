import CondrType from 'util/Type/CondrType'
import OutcomeType from 'util/Type/OutcomeType'
import OutlierType from 'util/Type/OutlierType'

import { CurrentFilterListType } from './UtilFilter'

interface IndividualFilterType {
  condr?: CondrType;
  first_ps?: number;
  ms_1_2?: number;
  ms_1_dur?: number;
  ms_2?: number;
  outcome?: OutcomeType;
  outlier?: OutlierType;
  ps_1?: number;
  ps_2?: number;
  ps_3?: number;
  ss_1?: number;
  ss_2?: number;
}

export function removeDubiousFilter({ currentFilterList }: CurrentFilterListType) {
  return ({ outlier }: IndividualFilterType) => {
    if (!currentFilterList.rmDubious) return true
    return outlier !== 'DUB'
  }
}

export function severeFilter({ currentFilterList }: CurrentFilterListType) {
  return ({ outcome }: IndividualFilterType) => {
    if (!currentFilterList.severe && !currentFilterList.nonSevere) { return true }
    if (currentFilterList.severe && outcome === 'SEV') { return true }
    if (currentFilterList.nonSevere && outcome === 'NSV') { return true }
    return false
  }
}

export function iFilter({ currentFilterList }: CurrentFilterListType) {
  return ({ condr }: IndividualFilterType) => {
    if (!currentFilterList.fjp) return true
    return condr === 'i'
  }
}

export function heoFilter({ currentFilterList }: CurrentFilterListType) {
  return ({
    ss_1,
    ss_2,
    first_ps,
    ms_1_2,
    ms_2,
    ps_1,
    ps_2,
    ps_3,
    ms_1_dur,
  }: IndividualFilterType) => {
    if (!currentFilterList?.heo) return true
    if (
      !ss_1
      &&
      !ss_2
      &&
      !first_ps
      &&
      !ps_1
      &&
      !ps_2
      &&
      !ps_3
      &&
      (
        !ms_1_dur
        ||
        ms_1_dur <= 15
      )
    ) return false

    return true
  }
}
