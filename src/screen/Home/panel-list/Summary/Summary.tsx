import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'component/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'component/SubPageWrapper/SubPageWrapper'
import PageSummary from 'component/PageSummary/PageSummary'

function Summary() {
  const h = i18next.t('Home.summaryPanelLabel')

  return (
    <SubPageWrapper heading={h}>
      <HeadingAndTextPanel text={<PageSummary />} />
    </SubPageWrapper>
  )
}

export default Summary;
