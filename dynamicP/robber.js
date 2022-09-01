/**
 * @param {number []} nums
 * @return {number}
 * problem 198 Dynamic Programming Solution
 * https://leetcode.com/problems/house-robber/
 * solution explanation: https://www.youtube.com/watch?v=Q_nBUVnfcD8
 */
var rob = function (nums) {
  if (!nums) return 0;
  if (nums.length == 1) return nums[0];

  // create the empty array which represents each of the houses
  const dp = [];
  //   Array(nums.length).fill(0) - people entered actual full array but i don't know why

  // base cases
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]); // which combination has largest value at this point
  for (let i = 2; i < nums.length; i++) {
    // now for by each subsequent house, what is best combo so far?
    // largest of:
    // 1) current + total by 2 away - as can only add current to one 2 away
    // 2) total 1 away
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  // result will be max amount by the last house
  return dp[dp.length - 1];
};
// Time Complexity = O(n)
// storing results as you go along keeps the complexity down
// Space Complexity = O(n)

module.exports = { rob };

// console.log('[1, 2, 3, 1] gives 1 + 3 = 4 ? ', rob([1, 2, 3, 1]));
// console.log('[2, 1, 1, 3] gives 2 + 3 = 5 ? ', rob([2, 1, 1, 3]));
