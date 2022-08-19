/**
 * given number n return the index value of the fib seq
 * where the sequence is...
 *    0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 * e.g. fibRecursive(3) // 2
 * @param {number} n
 */
const fibRecursive = (n) => {
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  // reduction
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};
/**
 * iterative approach
 */
const fibIterative = (n) => {};

module.exports = {
  fibRecursive,
  fibIterative,
};
