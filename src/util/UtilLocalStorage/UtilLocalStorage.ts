export interface SetLocalStorageType {
  k: string;
  v: any;
}

export interface GetLocalStorageType {
  defaultV?: any,
  k: string;
}

export function setLocalStorage({ k, v }: SetLocalStorageType) {
  localStorage.setItem(k, v)
}

export function getLocalStorage({ k }: GetLocalStorageType) {
  return localStorage.getItem(k)
}

export function setJsonLocalStorage({ k, v }: SetLocalStorageType) {
  localStorage.setItem(k, JSON.stringify(v))
}

export function getJsonLocalStorage({ k }: GetLocalStorageType) {
  const localStorageItem = localStorage.getItem(k)
  return localStorageItem
    ? JSON.parse(localStorageItem)
    : null
}
