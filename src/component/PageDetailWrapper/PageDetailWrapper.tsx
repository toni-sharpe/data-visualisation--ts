import { isNotNil } from 'ramda'
import i18next from 'util/i18next/i18next'
import React, { ReactNode } from 'react'

import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'
import KeyHintToggle from 'component/KeyHintToggle/KeyHintToggle'
import LanguageToggle from 'component/LanguageToggle/LanguageToggle'

import './PageDetailWrapper.scss'

interface PageDetailWrapperType {
  children: ReactNode;
  count?: string | number;
  extraClass?: string;
  heading?: string;
  i18nBase?: string;
  secondaryNav?: ReactNode;
}

function PageDetailWrapper({
  children,
  count = undefined,
  extraClass = undefined,
  heading: headingProp = undefined,
  i18nBase = undefined,
  secondaryNav = undefined,
}: PageDetailWrapperType) {
  const heading = headingProp?.length
    ? headingProp
    : i18next.t(`MainPageHeading.${i18nBase}`)

  return ( 
    <article className={`${extraClass ? extraClass : ''} page-detail-wrapper column-layout space-children--column`}>
      <header
        className='row-layout page-detail-wrapper__header'
        onKeyDown={onKeyDownRegionHandler()}
        tabIndex={0}
      >
        <div className='page-detail-wrapper__left'>
          <h1 className='page-detail-wrapper__heading'>{heading}</h1>
          <section className='page-detail-wrapper__secondary row-layout space-children--wide-with-border'>
            {secondaryNav && (<div>{secondaryNav}</div>)}
          </section>
        </div>
        <div className='row-layout space-children'>
          <KeyHintToggle />
          { isNotNil(count)
            && (
              <span className='page-detail-wrapper__full-count'>
                {
                  <span>
                    <i>N</i>={count}
                  </span>
                }
              </span>
            )
          }
          <LanguageToggle />
        </div>
      </header>
      {children}
    </article>
  )
} 

export default PageDetailWrapper
