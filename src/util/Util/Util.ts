import { type } from 'ramda'

import { PRECISION } from 'util/Constant/BaseConstantList'
import { MenuSlugType } from 'util/UtilNav/UtilNav'


export function getCurrentUrl() {
  const documentUrl = document.URL.split('/')
  const menuSlug: MenuSlugType = documentUrl[documentUrl.length - 1] as MenuSlugType
  return menuSlug
}

interface NumberPrecisionType {
  n: number;
  lessPrecise?: number;
}

export function numberPrecision({ n, lessPrecise = 0 }: NumberPrecisionType) {
  return Number(n.toPrecision(PRECISION - lessPrecise))
}

interface IsOrIsInArrayType {
  k: string | number;
  arr?: Array<string | number> | string | number;
}

export function isOrIsInArray({ k, arr }: IsOrIsInArrayType) {
  return (
    arr === k
    || (
      type(arr) === 'Array'
      &&
      // @ts-ignore/currently ignore
      arr?.includes(k)
    )
  )
}
