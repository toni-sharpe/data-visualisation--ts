import i18next from 'util/i18next/i18next'
import React from 'react'

import Button from 'component/Button/Button'
import { setLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './LanguageToggle.scss'

const i18nBase = 'LanguageToggle'

function LanguageToggleButton({ languageKey = 'en' }) {
  const currentLanguage = i18next.language
  const isSelected = languageKey === currentLanguage

  return (
    <Button
      isSelected={isSelected}
      label={i18next.t(`${i18nBase}.${languageKey}`)}
      onClick={() => {
        i18next.changeLanguage(languageKey)
        setLocalStorage({ k: 'currentLanguage', v: languageKey })
      }}
    />
  )
}

function LanguageToggle() {
  const navAriaLabel = i18next.t(`${i18nBase}.languageToggle`)

  return (
    <nav
      aria-label={navAriaLabel}
      className='row-layout space-children language-toggle'
    >
      <ol className='row-layout space-children'>
        <li key='de'><LanguageToggleButton languageKey='de' /></li>
        <li key='en'><LanguageToggleButton languageKey='en' /></li>
      </ol>
    </nav>
  )
}

export default LanguageToggle
