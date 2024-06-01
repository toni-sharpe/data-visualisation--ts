import { CONTRAST_TOGGLE_MINIMUM } from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

interface CalcHueType {
  i: number;
  total: number;
}

export function calcHue({ i, total }: CalcHueType) {
  return 360
    /
    total
    *
    i
}

interface CalcContrastToggleType {
  i: number;
  total: number;
  useHueContrastToggle: boolean;
}

function calcContrastToggle({ i, total, useHueContrastToggle }: CalcContrastToggleType) {
  if (!useHueContrastToggle) {
    return 0
  }

  if (total <= CONTRAST_TOGGLE_MINIMUM) {
    return 0
  }

  return (i % 2) * 180
}

interface CalcAccessibleHueType {
  useHueContrastToggle?: boolean;
  useHueWheel?: boolean;
}

interface HueFnType {
  aLevel?: number;
  i: number;
  total: number;
}

export function calcAccessibleHue({
  useHueContrastToggle = true,
  useHueWheel = true,
} = {}) {
  if (!useHueWheel) {
    return null
  }

  return function({ i, total, aLevel = 1 }: HueFnType) {
    const hueCalced = calcHue({ i, total })
    const contractToggleCalced = calcContrastToggle({ i, total, useHueContrastToggle })

    const hue = numberPrecision({
      n: hueCalced + contractToggleCalced,
      lessPrecise: 2,
    })
    const hueCircled = hue > 360 ? hue % 360 : hue
    return `hsla(${hueCircled} 80% 50% / ${aLevel})`
  }
}
