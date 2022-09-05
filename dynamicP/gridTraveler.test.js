const { gridTraveler } = require('./gridTraveler');

test('(1,1)', () => {
  expect(gridTraveler(1, 1)).toBe(1);
});

test('(2,3)', () => {
  expect(gridTraveler(2, 3)).toBe(3);
});

test('(1,0)', () => {
  expect(gridTraveler(1, 0)).toBe(0);
});

test('(0,2)', () => {
  expect(gridTraveler(0, 2)).toBe(0);
});

// test('(30,25)', () => {
//   expect(gridTraveler(30, 25)).toBe(0);
// });
