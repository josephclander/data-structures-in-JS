// const bubbleSort = (array) => {
//   let reCheck = true;
//   while (reCheck) {
//     reCheck = false;
//     let index = 0;
//     while (index < array.length - 1) {
//       if (array[index + 1] < array[index]) {
//         reCheck = true;
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//       }
//       index++;
//     }
//   }
//   return array;
// };

// the difference in this solution:
// you know the first number has been checked on the first run
// then the second number has been checked...
const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
module.exports = { bubbleSort };
