import i18next from 'util/i18next/i18next'
import React from 'react'

import KeyHint from 'component/KeyHint/KeyHint'
import MenuItem from 'component/MenuItem/MenuItem'
import { MenuSlugType, ROOT_MENU_SLUGS } from 'util/UtilNav/UtilNav'

import './Menu.scss'

const i18nBase = 'Menu'

interface MenuType {
  currentUrl: MenuSlugType;
  rootMenuSlugs?: MenuSlugType[];
}

function Menu({
  currentUrl,
  rootMenuSlugs = ROOT_MENU_SLUGS,
}: MenuType) {
  const ariaLabel = i18next.t(`${i18nBase}.ariaLabel`)

  return (
    <nav aria-label={ariaLabel}>
      <ul role='menu' className='menu'>
        <li role='none'>
          <KeyHint
            letter='m'
            positionStyle={{ top: '-2px', left: '-2px' }}
          />
        </li>
        {rootMenuSlugs.map((urlSlug, i) => {
          return (
            <li
              className={i === 0 ? 'js-menu-first' : undefined}
              key={urlSlug}
              role='none'
            >
              <MenuItem
                currentUrl={currentUrl}
                label={i18next.t(`MainPageHeading.${urlSlug}`)}
                urlSlug={urlSlug}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )  
}

export default Menu;
