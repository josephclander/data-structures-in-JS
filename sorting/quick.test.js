const { quickSort } = require('./quick');

const array = [3, 1, 4, 2];
const answer = [1, 2, 3, 4];
// we're choosing the last value as the pivot point
// this choice will remain the same throughout

test('solves with quick sort', () => {
  expect(quickSort(array, 0, array.length - 1)).toStrictEqual(answer);
});
