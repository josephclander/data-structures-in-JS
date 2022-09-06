const bestSum = (targetSum, numbers, memo = {}) => {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    // now get back either; null, or array
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

module.exports = { bestSum };

// m = targetSum, n = numbers

// brute force

// time complexity = O(n^m * m)
// ---> n^m every n width of numbers will have m depth of branches from it
// ---> m extra reordering the array

// space complexity = O(m^2)
// ---> recursive calc of depth of tree
// ---> + saving of shortestCombo

// memoized

// time complexity = O(n * m * m)
// ---> length (n) * depth of tree (m)
// ---> m extra reordering the array

// space complexity = O(m^2)
// ---> can have m keys in memo that have an array of length m
