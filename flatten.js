const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  } else {
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`😃😃😃 Assertion Passed: ${array1} === ${array2}`);
};


const flatten = function(array) {
  const flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let val of element) {
        flatArray.push(val);
      }
    } else {
      flatArray.push(element);
    }
  }
  console.log(flatArray)
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]