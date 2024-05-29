import React from 'react'

import './StoryBookExampleBlock.scss'

function StoryBookExampleBlock({ children }) {
  return (
    <div className='story-book-example-block'>
      {children || 'some thing'}
    </div>
  )
}

export default StoryBookExampleBlock
