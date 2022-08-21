/**
 * return a sorted array via quicksort algorithm
 * we keep the full array at all times, just move the related indices
 * set up with left and right to use recursion
 * @param {array} array
 * @param {number} left index
 * @param {number} right index
 * @returns sorted array
 */
const quickSort = (array, left, right) => {
  let pivot;
  let partitionIndex;
  // base case -> stop if left index = right index
  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    // sort left and right sides of the pivot
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
};
/**
 * move values smaller than the pivot to the left by swapping
 * can choose any point for the pivot but most opt for the end
 * @param {array} array always the full initial array
 * @param {number} pivot index
 * @param {number} left index
 * @param {number} right index
 * eg full array at a certain stage could be
 *    [x x L x x R x]
 */
const partition = (array, pivot, left, right) => {
  let pivotValue = array[pivot];
  // determines what values of array are less than the pivot
  let partitionIndex = left;
  // loop section
  // swap only values less than pivot value
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
};
/**
 * swap values in the array between 2 indices
 * @param {array} array
 * @param {number} firstIndex
 * @param {number} secondIndex
 */
const swap = (array, firstIndex, secondIndex) => {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

module.exports = { quickSort };
