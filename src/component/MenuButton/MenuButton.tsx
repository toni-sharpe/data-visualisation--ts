import React from 'react'

import Button, { ButtonType } from 'component/Button/Button'

import './MenuButton.scss'

function MenuButton({
  label,
  onClick,
  title,
}: ButtonType) {
  return (
    <Button
      extraClass='menu-button'
      label={label}
      onClick={onClick}
      title={title}
    />
  )
}

export default MenuButton
