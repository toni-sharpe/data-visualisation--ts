import {
  GetLocalStorageType,
  getLocalStorage,
} from './UtilLocalStorage'

export function secondaryNavLocalStorage({ defaultV, k }: GetLocalStorageType) {
  return getLocalStorage({ k }) || defaultV
}
