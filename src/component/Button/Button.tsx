import i18next from 'util/i18next/i18next'
import React from 'react'

import './Button.scss'

const i18nBase = 'Button'

function Button({
  ariaLabel,
  extraClass,
  isDisabled,
  isPrimaryMarked,
  isSelected,
  label,
  onClick,
  onKeyDown,
  size,
  style,
  title,
}) {
  const disabledClass = isDisabled ? ' is-disabled' : ''
  const selectedClass = isSelected ? ' is-selected' : ''

  const isDisabledTitleText = isDisabled
    ? i18next.t(`${i18nBase}.isDisabled`, {
      selectedExtra: isSelected
        ? i18next.t(`${i18nBase}.isDisabledSelected`)
        : '',
      })
    : ''

  const className = `${size ? `button--${size} ` : ''}${extraClass || ''}${selectedClass}${disabledClass}`

  const buttonProps = {
    'aria-disabled': isDisabled,
    'aria-label': ariaLabel,
    'aria-pressed': isSelected,
    disabled: isDisabled,
    className,
    onClick: isDisabled
      ? null
      : onClick,
    onKeyDown: isDisabled
      ? null
      : onKeyDown,
    style,
    title: `${title ? title : ''}${isDisabledTitleText}${isPrimaryMarked ? ` - ${i18next.t(`${i18nBase}.primary`)}` : ''}`,
  }

  return (
    <button { ...buttonProps }>
      <span>{label}</span>
    </button>
  )
}

Button.defaultProps = {
  ariaLabel: null,
  isDisabled: false,
  isSelected: false,
  label: "Label needs to be set!",
  size: null,
  title: undefined,
}

export default Button
