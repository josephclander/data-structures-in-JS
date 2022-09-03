// leetcode question 70 https://leetcode.com/problems/climbing-stairs/
/**
 * leetcode question 70 https://leetcode.com/problems/climbing-stairs/
 * there are n steps and you can climb in 1 or 2 step increments
 * @param {number} n
 * @returns {number} number of combinations
 */
const climbStairsDP = (n) => {
  if (n < 1) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  // so the solution is a way of repeating a pattern
  // the fibonacci sequence from the base state onwards
  // a saves the second-to-last sub-state data, b saves the first sub-state data, temp saves the current state data
  let a = 1,
    b = 2;
  let temp = a + b;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};

module.exports = { climbStairsDP };
