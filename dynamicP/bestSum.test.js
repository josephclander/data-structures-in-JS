const { bestSum } = require('./bestSum');

const result1 = bestSum(8, [2, 3, 5]).sort();
test('bestSum(8, [2, 3, 5]) gives [3,5]', () => {
  expect(result1).toEqual([3, 5]);
});

const result2 = bestSum(7, [1, 3, 5]).sort();
test('bestSum(7, [1, 3, 5]) gives [1,1,5]', () => {
  expect(result2).toEqual([1, 1, 5]);
});

const result3 = bestSum(100, [1, 2, 5, 25]);
test('bestSum(100, [1, 2, 5, 25] gives [25, 25, 25, 25]', () => {
  expect(result3).toEqual([25, 25, 25, 25]);
});
