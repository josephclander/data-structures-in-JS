/**
 * reverse a string using recursion
 * @param {string} string
 */
const reverseString = (string) => {
  if (string.length === 0) return "";
  return reverseString(string.substring(1)) + string[0];
};

module.exports = { reverseString };
