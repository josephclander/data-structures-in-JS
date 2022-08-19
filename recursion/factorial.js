/**
 * factorial function using recursion
 * @param {number} number
 * O(n)
 */
const recursive = (number) => {
  // base case
  if (number === 1) return 1;
  return number * recursive(number - 1);
};
/**
 * factorial function using recursion
 * @param {number} number
 * O(n)
 */
const iterative = (number) => {
  let i = number;
  let answer = 1;
  while (i > 1) {
    answer = answer * i;
    i--;
  }
  return answer;
};
module.exports = { recursive, iterative };
