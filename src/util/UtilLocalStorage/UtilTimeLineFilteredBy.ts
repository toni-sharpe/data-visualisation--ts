import {
  GetLocalStorageType,
  getJsonLocalStorage,
} from './UtilLocalStorage'

export function timeLineFilterByLocalStorage({ k }: GetLocalStorageType) {
  return getJsonLocalStorage({ k }) || [null, null]
}
