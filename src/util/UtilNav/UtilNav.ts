import i18next from 'util/i18next/i18next'

import { setLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

export type MenuSlugType = '' | 'Home' | 'Scatter' | 'TimeLine' | 'Gantt' | 'HistogramMaker' | 'SVG' | 'WorldMap'

interface SecondaryNavPropListType {
  currentPanel: string,
  i18nBase: string,
  k: string,
  setCurrentPanel: React.Dispatch<React.SetStateAction<string>>
}

export const ROOT_MENU_SLUGS: MenuSlugType[] = [
  '',
  'Scatter',
  'TimeLine',
  'Gantt',
  'HistogramMaker',
  'SVG',
  'WorldMap',
]

// These are used all over to create sub-pages so get built in utils
export function secondaryNavProps({
  currentPanel,
  i18nBase,
  k,
  setCurrentPanel,
}: SecondaryNavPropListType) {
  return {
    isSelected: currentPanel === k,
    label: i18next.t(`${i18nBase}.${k}PanelLabel`),
    onClick: () => {
      setLocalStorage({ k: i18nBase, v: k })
      setCurrentPanel(k)
    },
  }
}
