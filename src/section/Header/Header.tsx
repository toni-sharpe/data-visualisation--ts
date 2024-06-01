import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import FilterButtonList from 'section/FilterButtonList/FilterButtonList'
import Menu from 'section/Menu/Menu'
import MenuButton from 'component/MenuButton/MenuButton'
import { FilterListType, ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'
import { getJsonLocalStorage, setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
import { MenuSlugType } from 'util/UtilNav/UtilNav'
import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'

import './Header.scss'

const i18nBase = 'Header'

interface HeaderType {
  currentFilterList: FilterListType;
  currentUrl: MenuSlugType;
  setCurrentFilterList: React.Dispatch<React.SetStateAction<FilterListType>>;
}

function Header({
  currentFilterList = ORDERED_FILTERS,
  currentUrl = 'Scatter',
  setCurrentFilterList,
}: HeaderType) {
  const persisted = getJsonLocalStorage({ k: 'menuOpen' })
  const [isOpen, setIsOpen] = useState(persisted || false)

  const openClass = isOpen ? 'open' : ''

  const closeMenuText = i18next.t(`${i18nBase}.close`)
  const openMenuText = i18next.t(`${i18nBase}.openMenu`)

  return (
    <div
      onKeyDown={onKeyDownRegionHandler()}
      tabIndex={0}
    >
      { !isOpen && (
        <div className='ui-header-bar__main-button'>
          <MenuButton
            label={openMenuText}
            onClick={() => {
              setIsOpen(true)
              setJsonLocalStorage({ k: 'menuOpen', v: true })
            }}
          />
        </div>
      ) }
      { isOpen && (
        <div className='ui-header-bar__main-button'>
          <MenuButton
            label={closeMenuText}
            onClick={() => {
              setIsOpen(false)
              setJsonLocalStorage({ k: 'menuOpen', v: false })
            }}
            title={closeMenuText}
          />
        </div>
      ) }
      <header
        className={`js-header ui-header-bar ${openClass}`}
        data-testid='ui-header'
      >
        {
          <div className='ui-header-bar__close-x-button'>
            <MenuButton
              label='X'
              onClick={() => {
                setIsOpen(false)
                setJsonLocalStorage({ k: 'menuOpen', v: false })
              }}
              title={closeMenuText}
            />
          </div>
        }
        <div className='ui-header-bar__nav-and-filter'>
          <Menu currentUrl={currentUrl} />
          <FilterButtonList
            currentFilterList={currentFilterList}
            currentUrl={currentUrl}
            setCurrentFilterList={setCurrentFilterList}
          />
        </div>
      </header>
    </div>
  )  
}

export default Header;
