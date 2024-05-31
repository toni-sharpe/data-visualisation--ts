import {
  GetLocalStorageType,
  getLocalStorage,
} from './UtilLocalStorage'

export function dataAdjusterLocalStorage({ k }: GetLocalStorageType) {
  const result = getLocalStorage({ k })
  return (
    result
    &&
    result !== 'undefined'
  )
    ? Number(result)
    : Number('0')
}
