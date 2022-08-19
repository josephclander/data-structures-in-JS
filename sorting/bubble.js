const bubbleSort = (array) => {
  let reCheck = true;
  while (reCheck) {
    reCheck = false;
    let index = 0;
    while (index < array.length - 1) {
      if (array[index + 1] < array[index]) {
        reCheck = true;
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      }
      index++;
    }
  }
  return array;
};
module.exports = { bubbleSort };
