import React from 'react'

import './KeyHint.scss'

interface KeyHintType {
  isShown?: boolean;
  letter: 'g' | 'h' | 'k' | 'm' | 'n' | 'r' | 's' | 'x' | 'z' | '1' | '2';
  positionStyle: React.CSSProperties;
}

function KeyHint({
  isShown = false,
  letter,
  positionStyle,
}: KeyHintType) {
  const classList = `js-key-hint-${letter} key-hint ${isShown ? '' : 'hide'}`

  return (
    <div
      className={classList}
      style={positionStyle}
    >
      <span>{letter}</span>
    </div>
  )
}

export default KeyHint;
