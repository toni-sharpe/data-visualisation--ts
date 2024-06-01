import i18next from 'util/i18next/i18next'
import { toPairs, type } from 'ramda'

import { I18N_ERROR_KEY, TOP_SPACER } from 'util/Constant/BaseConstantList'

// Reasoning: took a lot to add very little to an understandable function that handles types
// @ts-ignore
export function reduceToMaxThing(acc, [_, data]) {
  // @ts-ignore
  const mmMAXMapper = (([_, val]) => {
    return type(val) === 'Array'
      ? type(val[0]) === 'Number' && type(val[1]) === 'Array'
        ? Math.max(...val[1])
        : Math.max(...val)
      : val
  })
  const maybeMaxOfTheThingList = Math.max(
    ...toPairs(data).map(mmMAXMapper)
  )
  return acc > maybeMaxOfTheThingList
    ? acc
    : maybeMaxOfTheThingList
}

interface CalcMaxOfTheThingList {
  theThingList: Array<any>;
  topSpacer?: number;
}

export function calcMaxOfTheThingList({ theThingList, topSpacer = TOP_SPACER }: CalcMaxOfTheThingList) {
  return Math.ceil(
    theThingList.reduce(reduceToMaxThing, 0)
    *
    topSpacer // let it breath a bit dependent on size
  )
}
