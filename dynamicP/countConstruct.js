/**
 * find the number of ways to construct the target
 * @param {string} target
 * @param {string []} values
 * @returns {number}
 */
const countConstruct = (target, values, memo = {}) => {
  if (memo[target]) return memo[target];
  if (target === '') return 1;

  let combos = 0;
  for (let value of values) {
    if (target.indexOf(value) === 0) {
      const suffix = target.slice(value.length);
      combos += countConstruct(suffix, values);
    }
  }
  memo[target] = combos;
  return combos;
};

module.exports = { countConstruct };

// m = target.length (depth)
// n = wordsArray.length (width)

// brute force

// time complexity: O(n^m * m)
// ---> n options times itself m times
// ---> * m for slice iteration
// although no early returns, based on worst case so same as before

// space complexity: O(m^2)
// ---> the depth is m, so will go to bottom before returning from the stack
// ---> saving suffix (at max length of m)

// memoized

// time complexity: O(n * m * m)
// ---> n options times m
// ---> * m for slice iteration still

// space complexity: O(m^2)
// ---> the depth is m, so will go to bottom before returning from the stack
// ---> saving suffix (at max length of m)
