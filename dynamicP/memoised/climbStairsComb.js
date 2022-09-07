// leetcode question 70 https://leetcode.com/problems/climbing-stairs/
/**
 * find the factorial of a given integer, n
 * down as far as a given integer, r
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
const factToR = (n, r = 0) => {
  // errors
  if (n < 0) return undefined;
  // base case
  if (n === 1 || n === 0) return 1;
  let result = 1;
  // only multiply
  for (let val = n; val > r; val--) {
    result *= val;
  }
  return result;
};
/**
 * combinations calculator
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
const comb = (n, r) => {
  if (r === 0 || r === n) return 1;
  if (r === 1 || r === n - 1) return n;
  // n! / r!(n-r)!
  // n * ... * (n-r) / (n-r)!
  return factToR(n, r) / factToR(n - r);
};
/**
 * leetcode question 70 https://leetcode.com/problems/climbing-stairs/
 * there are n steps and you can climb in 1 or 2 step increments
 * @param {number} n
 * @returns {number} number of combinations
 */
const climbStairs = (n) => {
  // find combinations of 0 twos
  let result = 1;
  // add combinations of other twos
  // how many twos will fit?
  const twos = Math.floor(n / 2);
  for (let i = 1; i <= twos; i++) {
    // pattern e.g. if n = 5, placing 1 two and rest ones
    // same as combination 5 - 1 = 4 items: 4C1 to find 1 two
    result += comb(n - i, i);
  }
  return result;
};

module.exports = { climbStairs };
