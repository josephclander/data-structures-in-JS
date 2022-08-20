const { mergeSort } = require('./merge');

const array = [3, 1, 4, 2];
const answer = [1, 2, 3, 4];

test('solves with merge sort', () => {
  expect(mergeSort(array)).toStrictEqual(answer);
});
