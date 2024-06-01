import { secondaryNavProps } from './UtilNav'


/*
 * secondaryNavProps()
 */
test('secondaryNavProps()', () => {
  const setCurrentPanel = jest.fn()

  const args = {
    currentPanel: 'test-b',
    k: 'test-a',
    i18nBase: 'ReactTestLibrary',
    setCurrentPanel,
  }

  const result = secondaryNavProps(args)

  const expected = {
    isSelected: false,
    label: 'Test Panel A',
  }

  expect(expected.isSelected).toEqual(result.isSelected)
  expect(expected.label).toEqual(result.label)
  result.onClick()
  expect(setCurrentPanel).toHaveBeenCalledWith('test-a')
})
