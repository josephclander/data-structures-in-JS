function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // return [...left, ...right];
  // elements in left array compared with right
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // this leaves some values that are already in order on the left or on the right
  // we don't know how long they are so we use slice
  // return = result + left_remainers + right_remainers
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = { mergeSort };

// [1,6]    [2,3]
// const answer = mergeSort(numbers);
// console.log(answer);
// odd [1,5,6,4,9] => 5 / 2 = 2.5 floor = 2
// even [1,7,5,2] => 4 / 2 = 2
