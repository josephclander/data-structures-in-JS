// will this work with 'this'?
const memoizedAddTo80 = () => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
};

module.exports = { memoizedAddTo80 };
