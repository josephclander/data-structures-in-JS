const { fibRecursive, fibIterative } = require("./fibonacci.js");

test("fibRecursive(0)", () => {
  expect(fibRecursive(0)).toBe(0);
});
test("fibRecursive(1)", () => {
  expect(fibRecursive(1)).toBe(1);
});
test("fibRecursive(2)", () => {
  expect(fibRecursive(2)).toBe(1);
});
test("fibRecursive(3)", () => {
  expect(fibRecursive(3)).toBe(2);
});
test("fibRecursive(4)", () => {
  expect(fibRecursive(4)).toBe(3);
});
test("fibRecursive(5)", () => {
  expect(fibRecursive(5)).toBe(5);
});
test("fibRecursive(6)", () => {
  expect(fibRecursive(6)).toBe(8);
});
