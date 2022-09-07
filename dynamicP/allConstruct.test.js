const { allConstruct } = require('./allConstruct');

let question1 = allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']);
const result1 = [['abc', 'def']].sort();
test('allConstruct(abcdef, [ab, abc, cd, def, abcd])', () => {
  expect(question1).toStrictEqual(result1);
});

const question2 = allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'ef']);
const result2 = [
  ['abc', 'def'],
  ['ab', 'cd', 'ef'],
].sort();
test('allConstruct(abcdef, [ab, abc, cd, def, ef])', () => {
  expect(question2).toStrictEqual(result2);
});

const question3 = allConstruct('lost', ['l', 'st', 'los']);
test('allConstruct(lost, [l, st, los])', () => {
  expect(question3).toStrictEqual([]);
});
