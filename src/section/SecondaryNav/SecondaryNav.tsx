import React, { ReactNode } from 'react'

import KeyHint from 'component/KeyHint/KeyHint'

import './SecondaryNav.scss'

interface SecondaryNavType {
  ariaLabel: string;
  children: ReactNode;
  extraClass?: string;
}

function SecondaryNav({
  ariaLabel,
  children,
  extraClass = undefined,
}: SecondaryNavType) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className={`${extraClass ? `${extraClass} ` : ''} js-menu-2-first secondary-nav`}>
        <li>
          <KeyHint
            letter='n'
            positionStyle={{ top: '-12px', left: '-12px' }}
          />
        </li>
        <li>{children}</li>
      </ol>
    </nav>
  )
}

export default SecondaryNav
