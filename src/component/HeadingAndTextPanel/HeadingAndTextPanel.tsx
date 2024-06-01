import React, { ReactNode } from 'react'

import './HeadingAndTextPanel.scss'

interface HeadingAndTextPanelType {
  heading?: string;
  text: string | ReactNode;
}

function HeadingAndTextPanel({ heading, text }: HeadingAndTextPanelType) {
  return (
    <section className='heading-and-text-panel column-layout space-children--wide-column'>
      { heading && <h2>{heading}</h2> }
      {text}
    </section>
  )
}

export default HeadingAndTextPanel
