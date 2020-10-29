const assertArraysEqual = function (array1, array2) {
  let results = eqArrays(array1, array2)
  if (!results) {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`😃😃😃 Assertion Passed: ${array1} === ${array2}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array){
  const middleArray = []
  const middle = Math.floor(array.length / 2)
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray.push(array[middle]);
  } else if (array.length % 2 === 0) {
    middleArray.push(array[middle - 1], array[middle])
  }
  return middleArray
}

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), [2]);// should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [5]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS