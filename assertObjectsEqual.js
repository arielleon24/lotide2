const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1[key] !== object2[key]) {
        return false
      }
    }
    return true
  }
    return false
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // IMPORTS UTIL LIBRARY WHICH ALLOWS TO FIX THE OUTPUT DUE TO INSPECT FUNCTION
  if (!eqObjects(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  } else if (eqObjects(actual, expected)) {
    console.log(`😃😃😃 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
const obtest1 = {a: 1, b: 2, c: 3};
const obtest10 = {a: 1, b: 2, c: 3};
const obtest2 = {a: 1, b: 2, c: 3, d:3};
const obtestA = {a: 1, b: "2", c: 3};
assertObjectsEqual(obtest1, obtestA); // should fail
assertObjectsEqual(obtest1, obtest10); // should pass
assertObjectsEqual(obtest1, obtest2); // different length