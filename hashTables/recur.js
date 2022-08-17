const recur = (arr) => {
  const hash = {};
  let lastTerm = null;
  for (let i = 0; i < arr.length; i++) {
    // check current term against hash
    if (hash[arr[i]] > 0) return arr[i];
    // add the term to the hash
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] += 1;
    }
    // update the last term
    lastTerm = arr[i];
  }
  return undefined;
};

module.exports = recur;
