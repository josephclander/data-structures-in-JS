const { fibRecursive, fibIterative } = require("./fibonacci.js");

describe("recursive tests", () => {
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
});
describe("iterative tests", () => {
  test("fibIterative(0)", () => {
    expect(fibIterative(0)).toBe(0);
  });
  test("fibIterative(1)", () => {
    expect(fibIterative(1)).toBe(1);
  });
  test("fibIterative(2)", () => {
    expect(fibIterative(2)).toBe(1);
  });
  test("fibIterative(3)", () => {
    expect(fibIterative(3)).toBe(2);
  });
  test("fibIterative(4)", () => {
    expect(fibIterative(4)).toBe(3);
  });
  test("fibIterative(5)", () => {
    expect(fibIterative(5)).toBe(5);
  });
  test("fibIterative(6)", () => {
    expect(fibIterative(6)).toBe(8);
  });
});
