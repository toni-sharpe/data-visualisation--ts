import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'component/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'component/SubPageWrapper/SubPageWrapper'

const i18nBase = 'Background'

function Background() {
  const h1 = i18next.t(`${i18nBase}.heading1`)
  const t1 = (
    <>
      <p>{i18next.t(`${i18nBase}.paragraph1`)}</p>
      <p>{i18next.t(`${i18nBase}.paragraph7`)}</p>
    </>
  )
  return (
    <SubPageWrapper>
      <div className='column-layout space-children--wide-column-with-border'>
        <HeadingAndTextPanel
          heading={h1}
          text={t1}
        />
        { [2, 3, 4, 5, 6].map(k => {
          const h = i18next.t(`${i18nBase}.heading${k}`)
          const t = i18next.t(`${i18nBase}.paragraph${k}`)

          return (<HeadingAndTextPanel heading={h} text={t} />)
        }) }
      </div>
    </SubPageWrapper>
  )
}

export default Background;
