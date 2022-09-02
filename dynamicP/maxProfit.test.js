const { maxProfit } = require('./maxProfit');

test('standard happy result', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('no profit result', () => {
  expect(maxProfit([7, 6, 5, 2, 1])).toBe(0);
});
