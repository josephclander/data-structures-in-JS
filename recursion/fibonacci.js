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
const fibIterative = (n) => {
  //   if (n === 0) return 0;
  //   if (n === 1) return 1;
  //   let nMinus2 = 0;
  //   let nMinus1 = 1;
  //   let currentIndex = 1;
  //   let answer = 1;
  //   while (currentIndex !== n) {
  //     answer = nMinus2 + nMinus1;
  //     nMinus2 = nMinus1;
  //     nMinus1 = answer;
  //     currentIndex++;
  //   }
  //   return answer;
  // the array is the array of answers with index
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};

module.exports = {
  fibRecursive,
  fibIterative,
};
