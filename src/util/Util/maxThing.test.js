import { calcMaxOfTheThingList } from './UtilMaxThing'

test('calcMaxOfTheThingList() with no arrays', () => {
  const theThingList = [
    ['1', { a: 2, b: 3, c: 5 }],
    ['2', { a: 6, b: 3, c: 5 }],
  ]
  expect(calcMaxOfTheThingList({ theThingList })).toEqual(7) // remember the top spacer calc
})

test('calcMaxOfTheThingList() with some arrays', () => {
  const theThingList = [
    ['1', { a: 2, b: [3, 7], c: 5 }],
    ['2', { a: 6, b: 3,      c: 5 }],
  ]
  expect(calcMaxOfTheThingList({ theThingList })).toEqual(8)
})

test('calcMaxOfTheThingList() with all arrays', () => {
  const theThingList = [
    ['1', { a: [2, 8], b: [3, 9], c: [5, 5] }],
    ['2', { a: [6, 1], b: [3, 4], c: [5, 6] }],
  ]
  expect(calcMaxOfTheThingList({ theThingList })).toEqual(10)
})
