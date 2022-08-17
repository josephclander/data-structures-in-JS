const small = ['Nemo'];
const bigger = ['one', 'two', 'three', 'four', 'Nemo'];
const large = new Array(10000).fill('Nemo');

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Nemo') console.log('Found Nemo!');
  }
  let t1 = performance.now();
  console.log(`The performance time was ${t1 - t0} milliseconds.`);
};

// findNemo(small);
// findNemo(bigger);
findNemo(large);

// 0(n) linear time to find values
