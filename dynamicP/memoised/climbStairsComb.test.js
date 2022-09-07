const { climbStairs } = require('./climbStairsComb');

test('output for n = 1', () => {
  expect(climbStairs(1)).toBe(1);
});

test('output for n = 2', () => {
  expect(climbStairs(2)).toBe(2);
});

test('output for n = 3', () => {
  expect(climbStairs(3)).toBe(3);
});

test('output for n = 4', () => {
  expect(climbStairs(4)).toBe(5);
});

test('output for n = 5', () => {
  expect(climbStairs(5)).toBe(8);
});

test('output for n = 6', () => {
  expect(climbStairs(6)).toBe(13);
});
