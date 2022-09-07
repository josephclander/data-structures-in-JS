/**
 * is it possible to make the target string from parts in array
 * @param {string} target
 * @param {string []} values
 * @returns {boolean}
 */
const canConstruct = (target, values, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;
  // how to remove prefix
  for (let value of values) {
    if (target.startsWith(value)) {
      const suffix = target.slice(value.length);
      if (canConstruct(suffix, values, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

module.exports = { canConstruct };

/*
Notes:
-- break into sub problems for recursion
-- look for the base cases 
---- these are the min req. where recursion would stop
*/

// called also use target.indexOf(word) === 0

// m = target.length (depth)
// n = wordsArray.length (width)

// brute force

// time complexity: O(n^m * m)
// ---> n options times itself m times
// ---> * m for slice iteration

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
