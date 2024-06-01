import React, { ReactNode } from 'react'

import HeadingLevelType from 'util/Type/HeadingLevelType'

import './SubPageWrapper.scss'

interface SubPageWrapperType {
  children: ReactNode;
  extraClass?: string;
  heading?: string;
  headingLevel?: HeadingLevelType;
  withBorder?: boolean;
}

function SubPageWrapper({
  children,
  extraClass = undefined,
  heading,
  headingLevel = 'h2',
  withBorder = true,
}: SubPageWrapperType) {
  return (
    <section className={`sub-page-wrapper column-layout space-children--wide-column${extraClass ? ` ${extraClass}` : ''}`}>
      {heading
        &&
        React.createElement(
          headingLevel, {
            children: heading,
            className: `sub-page-wrapper__${headingLevel}`
          }
        )
      }
      <div className={`sub-page-wrapper__child-wrapper row-layout space-children${withBorder ? '--with-border' : ''}`}>
        {children}
      </div>
    </section>
  )
}

export default SubPageWrapper
