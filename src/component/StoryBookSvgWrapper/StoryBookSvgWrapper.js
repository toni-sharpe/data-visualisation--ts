import React from 'react'

import SvgWrapper from 'component/SvgWrapper/SvgWrapper'

import './StoryBookSvgWrapper.scss'

function StoryBookSvgWrapper({
  children,
  offset,
  scale,
  svgScale,
}) {
  return (
    <div style={{
      height: '540px',
      width: '540px',
    }}>
      <SvgWrapper
        className='story-book-svg-wrapper'
        svgScale={svgScale
          ? svgScale
          : `${offset.join(' ')} ${scale} ${scale}`
        }
      >
        {children}
      </SvgWrapper>
    </div>
  )
}

StoryBookSvgWrapper.defaultProps = {
  offset: [0, 0],
  scale: 100,
}

export default StoryBookSvgWrapper
