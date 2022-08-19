const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    // testing values of array from index 1 upwards
    for (let j = 0; j < i; j++) {
      // test against all values in array less than where we are with i
      if (array[j] > array[i]) {
        // swap the values
        // const temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
        // more readable ES6 method
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

console.log(insertionSort([3, 1, 4, 2]));

module.exports = { insertionSort };
