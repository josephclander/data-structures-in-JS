/**
 * finds the largest profit from days prices
 * leetcode problem 121 - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number []} prices
 * @returns {number}
 */
const maxProfit = (prices) => {
  // buy low, sell high
  // setting this at 0 also prevents negative answers
  let maxProfit = 0;
  // initialise with first element you can get
  let buyPrice = prices[0];
  // loop for sell Price
  for (let sell = 1; sell < prices.length; sell++) {
    const sellPrice = prices[sell];
    const profit = sellPrice - buyPrice;
    // update the profit if it improves
    // this is storing the best result so far
    maxProfit = Math.max(maxProfit, profit);
    // update the buyPrice if improved, for the NEXT iteration
    if (sellPrice < buyPrice) buyPrice = sellPrice;
  }
  return maxProfit;
};

module.exports = { maxProfit };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 - buy prices[1] for 1 and sell prices[4] for 6
// console.log(maxProfit([4, 7, 8, 1, 3, 9])); // 8 - buy prices[1] for 1 and sell prices[4] for 6

// console.log(maxProfit([7, 6, 5, 2, 1])); // 0

// verbose way - time limit exceeded
// const maxProfit = (prices) => {
//     // max profit = largest - smallest
//     // buy first low and sell second high
//     //   const dp = [];
//     //   let lowest = prices[0];
//     //   let highest = prices[1];
//     // verbose way - time limit exceeded
//       let profit = 0;
//       for (let buy = 0; buy < prices.length - 1; buy++) {
//         for (let sell = buy + 1; sell < prices.length; sell++) {
//           if (prices[sell] - prices[buy] > profit) {
//             profit = prices[sell] - prices[buy];
//           }
//         }
//       }
//       return profit;
//   };
// time complexity = O(n^2)
// space complexity = O(1)
