const { climbStairsDP } = require('./climbStairsDP');

test('output for n = 1', () => {
  expect(climbStairsDP(1)).toBe(1);
});

test('output for n = 2', () => {
  expect(climbStairsDP(2)).toBe(2);
});

test('output for n = 3', () => {
  expect(climbStairsDP(3)).toBe(3);
});

test('output for n = 4', () => {
  expect(climbStairsDP(4)).toBe(5);
});

test('output for n = 5', () => {
  expect(climbStairsDP(5)).toBe(8);
});

test('output for n = 6', () => {
  expect(climbStairsDP(6)).toBe(13);
});
