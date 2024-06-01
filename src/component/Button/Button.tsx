import i18next from 'util/i18next/i18next'
import React from 'react'

import './Button.scss'

const i18nBase = 'Button'

export interface ButtonType {
  ariaLabel?: string;
  extraClass?: string;
  isDisabled?: boolean;
  isPrimaryMarked?: boolean;
  isSelected?: boolean;
  label: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  size?: string;
  style?: React.CSSProperties;
  title?: string;
}

function Button({
  ariaLabel = undefined,
  extraClass = undefined,
  isDisabled = false,
  isPrimaryMarked = false,
  isSelected = false,
  label,
  onClick,
  onKeyDown,
  size = 'medium',
  style = {},
  title = undefined,
}: ButtonType) {
  const disabledClass = isDisabled ? ' is-disabled' : ''
  const selectedClass = isSelected ? ' is-selected' : ''

  const isDisabledTitleText = isDisabled
    ? i18next.t(`${i18nBase}.isDisabled`, {
      selectedExtra: isSelected
        ? i18next.t(`${i18nBase}.isDisabledSelected`)
        : '',
      })
    : ''

  const className = `button--${size} ${extraClass || ''}${disabledClass}${selectedClass}`

  const buttonProps = {
    'aria-disabled': isDisabled,
    'aria-label': ariaLabel,
    'aria-pressed': isSelected,
    disabled: isDisabled,
    className,
    onClick: isDisabled
      ? undefined
      : onClick,
    onKeyDown: isDisabled
      ? undefined
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

export default Button
