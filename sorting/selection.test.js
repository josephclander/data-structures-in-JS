const { selectionSort } = require("./selection");
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

test("sorted using selection", () => {
  expect(selectionSort(array)).toStrictEqual(answer);
});
