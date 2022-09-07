/**
 * return all combinations of strings that create the target
 * @param {string} target
 * @param {string []} values
 * @returns {2D array}
 */
const allConstruct = (target, values) => {
  if (target === '') return [[]];

  const result = [];

  for (let value of values) {
    if (target.indexOf(value) === 0) {
      const suffix = target.slice(value.length);
      const suffixWays = allConstruct(suffix, values);
      // now insert the value to the front of the sub array
      const targetWays = suffixWays.map((way) => [value, ...way]);
      // use spread so that result stays a 2D array
      result.push(...targetWays);
    }
  }
  return result;
};

module.exports = { allConstruct };

/************************************************************* 
Memoising doesn't help much as you have to search everything!
**************************************************************/

// m = target.length
// n = valueArray.length

// The time complexity will always be O(n^m)
// the space complexity is the height/depth O(m)
