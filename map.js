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



const words = ["ground", "control", "to", "major", "tom"];

/////MAP function
const map = ((array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
    
  }
  return results
});

// Function to obtain the first letter of every word
const results1 = map(words, word => word[0]);


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);