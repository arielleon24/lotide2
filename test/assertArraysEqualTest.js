const assertArraysEqual = require("../assertArraysEqual");


//TEST Code
assertArraysEqual([1, 2, 3],[1, 2, 4]); // should FAIL
assertArraysEqual([10, 12, 20], [10, 12, 20]); // should FAIL