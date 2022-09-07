const { howSum } = require('./howSum');

const expected = howSum(7, [2, 3]).reduce((tot, cur) => tot + cur, 0);
test('howSum(7, [2, 3]) correct 2 combinations', () => {
  expect(expected).toBe(7);
});

const expected7 = howSum(7, [5, 3, 4, 7]).reduce((tot, cur) => tot + cur, 0);
test('howSum(7, [5, 3, 4, 7]) correct 2 combinations', () => {
  expect(expected7).toBe(7);
});

const expected7F = howSum(7, [2, 4]);
test('howSum(7, [2, 4]) to be null', () => {
  expect(expected7F).toBe(null);
});

const expected7Big = howSum(7, [2, 4]);
test('howSum(300, [7, 14]) to be null', () => {
  expect(expected7F).toBe(null);
});
