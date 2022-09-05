/**
 * returns values that add to the targetSum (only need one combination)
 * returns null if not possible
 * if targetSum = 0 return []
 * @param {number} targetSum
 * @param {number []} numbers
 * @returns {number []}
 */
const howSum = (targetSum, numbers, memo = {}) => {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    // now we collect the answer to the next result here
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  // this means we only return null if NONE of the nodes produce an array
  return null;
};
// n = numbers, m = targetSum
// brute force
// time complexity: O(n^m * m) length ^ depth of tree
// space complexity: O(m)

// memoized
// time complexity: O(n * m^2)
// this is because we now don't make that calc but we do copy the array across
// space complexity: O(m^2) m keys of array with m elements
module.exports = { howSum };
