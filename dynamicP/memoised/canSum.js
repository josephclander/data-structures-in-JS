/**
 * checks to see if the target number can be made by summing elements of the array
 *      numbers can be used multiple times
 *      assume all inputs are non negative
 * @param {number} targetSum
 * @param {number []} numbers
 * @returns {boolean}
 */
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

// brute force
// m = targetSum, n = array length
// time complexity O(n^m)
// space complexity O(m)

// memoisation
// time complexity O(m*n)
// space complexity O(m)

module.exports = { canSum };
