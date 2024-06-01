import PropTypes from 'prop-types'
import React from 'react'

import Button from 'component/Button/Button'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

interface SecondaryNavButtonListType {
  currentPanel: string;
  i18nBase: string;
  panelList: string[];
  setCurrentPanel: React.Dispatch<React.SetStateAction<string>>;
}

function SecondaryNavButtonList({
  currentPanel,
  i18nBase,
  panelList,
  setCurrentPanel,
}: SecondaryNavButtonListType) {
  return (
    <ol className='row-layout space-children'>
      { panelList.map((k, i: number) => {
          return (
            <li key={k}>
              <Button
                extraClass={i === 0 ? 'js-menu-2-first' : undefined}
                {
                  ...secondaryNavProps({
                    currentPanel,
                    i18nBase,
                    k,
                    setCurrentPanel,
                  })
                }
              />
            </li>
          )
        })
      }
    </ol>
  )
}

SecondaryNavButtonList.propTypes = {
  currentPanel: PropTypes.string,
  i18nBase: PropTypes.string,
  panelList: PropTypes.arrayOf(PropTypes.string),
  setCurrentPanel: PropTypes.func,
}

export default SecondaryNavButtonList
