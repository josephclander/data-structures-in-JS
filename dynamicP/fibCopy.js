// 1 1 2 3 5 8 13 21

const fibDynamic = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  // note that you pass down the memo object for these calls
  // so that they work on the same memo object
  memo[n] = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
  return memo[n];
};

// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
console.log(fibDynamic(40));
