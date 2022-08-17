alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// 26 values, index 0 to 25
const small = ['Nemo'];
const bigger = ['one', 'two', 'three', 'four', 'Nemo'];
const large = new Array(10000).fill('Nemo');

const findNemo = (array) => {
  // first letter of array in top or bottom of list
  let bottom = 0;
  let top = alphabet.length;
};

// findNemo(small);
// findNemo(bigger);
findNemo(large);
