const x = ['a', 'a', 'b', 'c'];
const y = ['d', 'e', 'f', 'g'];
const z = ['d', 'e', 'b', 'g'];

/**
 * This function sees if there are any common values in 2 arrays
 * @param {arrays of strings}
 * @return {boolean}
 */
const commonValues = (array1, array2) => {
  if (!array1 || !array2) return false;
  return array1.some((item) => array2.includes(item));

  //   if (!array1 || !array2) return false;
  //   // method given
  //   // create object of array 1
  //   const obj = {};
  //   array1.forEach((value) => (obj[value] = true));
  //   // loop array 2
  //   for (const value of array2) {
  //     // check if array 2 value exists in object 1
  //     if (obj[value]) {
  //       return true;
  //     }
  //   }
  //   return false;
};

console.log(commonValues(x, y)); // false
console.log(commonValues(x, z)); // true
console.log(commonValues(x)); // false
console.log(commonValues(x, null)); // false

// QUESTIONS
// what if null or empty array? OK
// any repetion in the same array? issue? OK
// no second array? OK

// loop array1
// check against loop of array2
// if same
// return true
// return false

// is putting into an object also 0(n) defeating purpose?
// can you compare items of objects without looping?

//   // combine 2 arrays
//   const combined = [...array1, ...array2];
//   // [a,b,c,d,e,f,g]
//   // if there is a multiple of any -> count greater than 1
//   const objectOfValues = {};
//   // put into a object literal
//   combined.forEach((value) => {
//     if (objectOfValues[value]) {
//       objectOfValues[value] += 1;
//     } else {
//       objectOfValues[value] = 1;
//     }
//   });
//   // loop object
//   for (key in objectOfValues) {
//     // return if key value > 1
//     if (objectOfValues[key] > 1) {
//       return true;
//     }
//   }
//   // return false
//   return false;
