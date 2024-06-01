import i18next from 'util/i18next/i18next'
import React from 'react'

const i18nBase = 'PageSummary'

function PageSummary() {
  return (
    <div className='column-layout space-children--wide-column'>
      { [1,2,3,4,5,6].map(k => {
        const h = i18next.t(`${i18nBase}.heading${k}`)
        const l = i18next.t(`${i18nBase}.link${k}`)
        const p = i18next.t(`${i18nBase}.paragraph${k}`)
        return (
          <div className='column-layout space-children--column'>
            <h3>{h}</h3>
            <a href={l}>{h}</a>
            <p>{p}</p>
          </div>
        )
      })}
    </div>
  );
}

export default PageSummary;
