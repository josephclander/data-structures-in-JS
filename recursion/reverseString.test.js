const { reverseString } = require("./reverseString");

test("that abcd will become dcba", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test("that yoyo mastery will become yretsam oyoy", () => {
  expect(reverseString("yoyo mastery")).toBe("yretsam oyoy");
});
