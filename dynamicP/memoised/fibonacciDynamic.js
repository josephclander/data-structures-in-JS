let slow_calculations = 0;
const fib = (n) => {
  slow_calculations++;
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
let fast_calculations = 0;
const fibDynamic = () => {
  const cache = {};
  return function fib(n) {
    fast_calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const fasterFib = fibDynamic();
console.log('fib:', fib(7));
console.log('fasterFib:', fasterFib(7));
console.log({ slow_calculations, fast_calculations });
