const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle")


//TEST CODE // 
assertArraysEqual(middle([1, 2, 3]), [2]);// should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [5]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS