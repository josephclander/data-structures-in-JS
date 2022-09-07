const { countConstruct } = require('./countConstruct');

test('countConstruct(abcdef, [ab, abc, cd, def, abcd]) - 1 way', () => {
  expect(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toBe(1);
});

test('countConstruct(abcdef, [ab, abc, cd, def, ef]) - 2 ways', () => {
  expect(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef'])).toBe(2);
});

test('countConstruct(lost, [l, st, los]) - 0 ways', () => {
  expect(countConstruct('lost', ['l', 'st', 'los'])).toBe(0);
});
