const { canSum } = require('./canSum');

test('2 numbers true', () => {
  expect(canSum(4, [1, 2])).toBe(true);
});

test('3 numbers true', () => {
  expect(canSum(13, [7, 4, 2])).toBe(true);
});

test('false', () => {
  expect(canSum(4, [3, 5])).toBe(false);
});
