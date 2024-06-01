export function rmMenuClass() {
  document.querySelector('.js-header')?.classList?.remove('open')
}

export function toggleKeyHintList() {
  document.querySelector('.js-key-hint-g')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-h')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-k')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-m')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-n')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-r')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-s')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-z')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-1')?.classList?.toggle('hide')
  document.querySelector('.js-key-hint-2')?.classList?.toggle('hide')
}

interface QueryKeyElemType {
  k: string;
}

function queryKeyElem({ k }: QueryKeyElemType) {
  return document.querySelector(k) as HTMLElement
}

interface KeyCodeType {
  keyCode: number;
}

export function onKeyDownRegionHandler({
  zoom = 1,
} = {}) {
  return function ({ keyCode }: KeyCodeType) {
    const firstEnabledButton = 'button:not([disabled])'
    switch(keyCode) {
      case 49: // 1 left axis
        const elemAxisLeft = queryKeyElem({ k: `.js-axis-selector--left ${firstEnabledButton}` })
        elemAxisLeft?.focus()
        rmMenuClass()
        break;
      case 50: // 2 right axis
        const elemAxisRight = queryKeyElem({ k: `.js-axis-selector--right ${firstEnabledButton}` })
        elemAxisRight?.focus()
        rmMenuClass()
        break;
      case 71: // g - Gantt/time-line toggle list
        const elemGantt = queryKeyElem({ k: `.js-gantt-toggle-list ${firstEnabledButton}` })
        elemGantt?.focus()
        const elemTime = queryKeyElem({ k: `.js-time-line-filter-list ${firstEnabledButton}` })
        elemTime?.focus()
        rmMenuClass()
        break;
      case 72: // h - history
        const elemYear = queryKeyElem({ k: '.js-year-slider-main-button' })
        elemYear?.focus()
        rmMenuClass()
        break;
      case 75: // k - toggle labels
        toggleKeyHintList()
        break;
      case 77: // m - menu
        document.querySelector('.js-header')?.classList?.toggle('open')
        const elemMenuOne = queryKeyElem({ k: '.js-menu-first a' })
        elemMenuOne?.focus()
        break;
      case 78: // n - menu2
        const elemMenuTwo = queryKeyElem({ k: `.js-menu-2-first ${firstEnabledButton}` })
        elemMenuTwo?.focus()
        rmMenuClass()
        break;
      case 83: // s - scroll
        const elemWest = queryKeyElem({ k: `.js-west` })
        elemWest?.focus()
        rmMenuClass()
        break;
      case 90: // z - zoom
        const elemZoom = queryKeyElem({ k: `.js-zoom-${zoom}` })
        elemZoom?.focus()
        const elemZoomGantt = queryKeyElem({ k: `.js-zoom-gantt ${firstEnabledButton}` })
        elemZoomGantt?.focus()
        rmMenuClass()
        break;
      case 82: // r - filter
        const elemFilter = queryKeyElem({ k: '.js-filter' })
        elemFilter?.focus()
        break;
      case 88: // x - reset
        rmMenuClass()
        break;
      default:
        break;
    }

    return false
  }
}
