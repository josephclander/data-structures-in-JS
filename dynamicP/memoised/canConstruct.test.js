const { canConstruct } = require('./canConstruct');

test('canConstruct("", [ab, abc, cd]) - true', () => {
  expect(canConstruct('', ['ab', 'abc', 'cd'])).toBe(true);
});

test('canConstruct(abcdef, [ab, abc, cd, def, abcd]) - true', () => {
  expect(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toBe(true);
});

test('canConstruct(lost, [l, st, los]) - false', () => {
  expect(canConstruct('lost', ['l', 'st', 'los'])).toBe(false);
});
