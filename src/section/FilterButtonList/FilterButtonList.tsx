import { keys } from 'ramda'
import i18next from 'util/i18next/i18next'
import React from 'react'

import Button, { ButtonType } from 'component/Button/Button'
import KeyHint from 'component/KeyHint/KeyHint'
// import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
// import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import { ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'
import { MenuSlugType } from 'util/UtilNav/UtilNav'
import { FilterListKeyType, FilterListType } from 'util/UtilFilter/UtilFilter'

import './FilterButtonList.scss'

interface FilterButtonListType {
  currentFilterList: FilterListType;
  currentUrl: MenuSlugType;
  orderedFilters?: FilterListType;
  setCurrentFilterList: React.Dispatch<React.SetStateAction<FilterListType>>;
}

interface FilterButtonListKType {
  k: FilterListKeyType;
}

function FilterButtonList({
  currentFilterList = ORDERED_FILTERS,
  currentUrl = 'Scatter',
  orderedFilters = ORDERED_FILTERS,
  setCurrentFilterList,
}: FilterButtonListType) {
  function filterButtonPropList ({ k }: FilterButtonListKType) {
    const isSelected = currentFilterList[k]

    const buttonProps:ButtonType = {
      isSelected,
      label: i18next.t(`FilterButtonLabel.${k}`),
      onClick: () => setCurrentFilterList({
        ...currentFilterList,
        [k]: !currentFilterList[k]
      })
    }

    return (buttonProps)
  }

  return (
    <ul
      className='filter-button-list'
      data-testid='filter-button-list'
    >
      <li>
        <KeyHint
          letter='r'
          positionStyle={{ top: '-8px', left: '-8px' }}
        />
      </li>
      { keys(orderedFilters).map((k: FilterListKeyType, i: number) => {
        return (
          <li key={k}>
            <Button
              extraClass={i === 0 ? 'js-filter' : undefined}
              {...filterButtonPropList({ k })}
            />
          </li>
        )}
      ) }
    </ul>
  )  
}

export default FilterButtonList;
