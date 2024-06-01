import React from 'react'

import './ErrorOutput.scss'

interface ErrorOutputType {
  ariaLive?: "assertive" | "polite";
  message?: string;
}

function ErrorOutput({
  ariaLive = 'polite',
  message = 'An error has occured',
}: ErrorOutputType) {
  return (
    <div
      aria-live={ariaLive}
      className='error-output'
    >
      <span className='error-output__text'>{message}</span>
    </div>
  )
}

export default ErrorOutput
