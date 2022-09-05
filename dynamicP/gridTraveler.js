// you have a m * n grid.
// you start in the top left and must finish in the bottom right
// you can only go 1 down or 1 right
// in how many ways can you travel?
const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  // base cases
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

module.exports = { gridTraveler };

// time complexity was O(2^n+m) now with memoization O(n*m) - looking at how many calculations are to be made
