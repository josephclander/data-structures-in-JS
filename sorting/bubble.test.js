const { bubbleSort } = require("./bubble");

const numbers1 = [5, 9, 1, 3, 4, 8, 2];
const answer1 = [1, 2, 3, 4, 5, 8, 9];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer2 = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

test("sorts with bubble sort", () => {
  expect(bubbleSort(numbers1)).toStrictEqual(answer1);
});

test("sorts with bubble sort", () => {
  expect(bubbleSort(numbers2)).toStrictEqual(answer2);
});
