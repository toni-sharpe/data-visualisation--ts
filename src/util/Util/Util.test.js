import { numberPrecision, sortFn } from './Util'

/*
 * numberPrecision()
 */
test('numberPrecision() applies site precision with 6 figures', () => {
  expect(numberPrecision({ n: 200001.6886 })).toEqual(200002)
})
test('numberPrecision() applies site precision with 5 figures', () => {
  expect(numberPrecision({ n: 10001.6886 })).toEqual(10001.7)
})
test('numberPrecision() applies site precision with 4 figures', () => {
  expect(numberPrecision({ n: 1000.6886 })).toEqual(1000.69)
})
test('numberPrecision() applies site precision with 3 figures', () => {
  expect(numberPrecision({ n: 100.1199 })).toEqual(100.12)
})
test('numberPrecision() applies site precision with 2 figures', () => {
  expect(numberPrecision({ n: 10.11919 })).toEqual(10.1192)
})
test('numberPrecision() applies site precision with small numbers', () => {
  expect(numberPrecision({ n: 0.0008 })).toEqual(0.0008)
  expect(numberPrecision({ n: 0.00008 })).toEqual(0.00008)
  expect(numberPrecision({ n: 0.000008 })).toEqual(0.000008)
})
test('numberPrecision() applies site precision and less precise if provided', () => {
  expect(numberPrecision({ n: 10.17689, lessPrecise: 1 })).toEqual(10.177)
})
test('numberPrecision() applies site precision and less precise further if provided', () => {
  expect(numberPrecision({ n: 10.17689, lessPrecise: 3 })).toEqual(10.2)
})
