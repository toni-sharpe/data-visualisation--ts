import { keys } from 'ramda'

import { ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'

import { isAnyFilterSet } from './UtilFilter'

/*
 * isAnyFilterSet()
 */
test('isAnyFilterSet()', () => {
  expect(isAnyFilterSet({ currentFilterList: { ...ORDERED_FILTERS, rmDubious: false } })).toEqual(false)
  expect(isAnyFilterSet({ currentFilterList: ORDERED_FILTERS })).toEqual(false)
  expect(isAnyFilterSet({ currentFilterList: { a: true, b: false } })).toEqual(true)
})
