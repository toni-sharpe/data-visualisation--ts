import React, { useEffect, useState } from 'react'
import { filter, pipe } from 'ramda'
import { Routes, Route } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import baseApiCall from 'api-call/BaseApiCall'
import Header from 'section/Header/Header'
import Home from 'screen/Home/Home';
import { getCurrentUrl } from 'util/Util/Util'
import { isAnyFilterSet, ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'
import {
  removeDubiousFilter,
  severeFilter,
  iFilter,
  heoFilter,
} from 'util/UtilFilter//UtilIndividualFilterList'

import './index.css'
import './responsive.scss'
import './theme.scss'

function App() {
  const currentUrl = getCurrentUrl()

  const [data, setData] = useState([])
  const [currentFilterList, setCurrentFilterList] = useState(ORDERED_FILTERS)

  useEffect(baseApiCall({ // eslint-disable-line react-hooks/exhaustive-deps
    endPoint: currentUrl,
    setData
  }), [currentUrl, setData])

  let filteredData: any = data

  if (isAnyFilterSet({ currentFilterList })) {
    filteredData = pipe(
      filter(removeDubiousFilter({ currentFilterList })),
      filter(severeFilter({ currentFilterList })),
      filter(iFilter({ currentFilterList })),
      filter(heoFilter({ currentFilterList })),
    )
  }

  return (
    <article className='app-wrapper'>
      <Header
        currentFilterList={currentFilterList}
        currentUrl={currentUrl}
        setCurrentFilterList={setCurrentFilterList}
      />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        { (
          currentUrl === ''
          ||
          currentUrl === 'Home'
        ) && (
          <Route
            path='/Home'
            element={<Home />}
          />
        ) }
        {/*{ currentUrl === 'Scatter' && (
          <Route
            path='Scatter'
            element={<Scatter data={filteredData} />}
          />
        )}
        { currentUrl === 'Gantt' && (
          <Route
            path='Gantt'
            element={<Gantt data={filteredData} />}
          />
        )}
        { currentUrl === 'TimeLine' && (
          <Route
            path='TimeLine'
            element={<TimeLine data={filteredData} />}
          />
        )}
        { currentUrl === 'HistogramMaker' && (
          <Route
            path='HistogramMaker'
            element={<HistogramMaker data={filteredData} />}
          />
        )}
        { currentUrl === 'SVG' && (
          <Route
            path='SVG'
            element={<SVG data={filteredData} />}
          />
        )}
        { currentUrl === 'WorldMap' && (
          <Route
            path='WorldMap'
            element={<WorldMap data={filteredData} />}
          />
        )}*/}
      </Routes>
    </article>
  );
}

// @ts-ignore/currently ignore
export default withTranslation()(App)
