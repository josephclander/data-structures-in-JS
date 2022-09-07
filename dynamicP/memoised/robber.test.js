const { rob } = require('./robber');

test('robber problem 1', () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
});

test('robber problem 2', () => {
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
});

test('robber problem 2', () => {
  expect(rob([2, 1, 1, 3])).toBe(5);
});
