const { insertionSort } = require("./insertion");

// const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const answer = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
const array = [3, 1, 4, 2];
const answer = [1, 2, 3, 4];

test("solves with insertion sort", () => {
  expect(insertionSort(array)).toStrictEqual(answer);
});
