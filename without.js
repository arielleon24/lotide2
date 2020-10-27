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


const without = function(array, valueToRemove) {
  const finalArray = [];
  let index = 0;
  for (let value of array) {
    if (value !== valueToRemove[index]) {
      finalArray.push(value);
      index += 1
    }
  } 
  console.log(finalArray);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);