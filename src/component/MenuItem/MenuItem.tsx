import React from 'react'

import { MenuSlugType } from 'util/UtilNav/UtilNav'

import './MenuItem.scss'

interface MenuItemType {
  currentUrl: MenuSlugType;
  label: string;
  urlSlug: MenuSlugType;
}

export function MenuItem({
  currentUrl,
  label,
  urlSlug,
}: MenuItemType) {
  const isSelected = currentUrl === urlSlug
  const ariaCurrent: 'page' | 'false' = isSelected ? 'page' : 'false'

  const menuItemProps = {
    'aria-current': ariaCurrent,
    className: `menu-item ${ isSelected ? 'menu-item--current' : ''}`,
    href: `/${urlSlug}`,
    role: 'menuitem',
  }

  return (<a {...menuItemProps}>{label}</a>)
}

export default MenuItem
