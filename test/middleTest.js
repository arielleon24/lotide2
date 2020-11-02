const { assert } = require("chai");
const middle = require("../middle")
//NOT NEEDED WITH MOCHA AND CHAI
// const assertArraysEqual = require("../assertArraysEqual");
// const eqArrays = require("../eqArrays");


// //TEST CODE // 
// assertArraysEqual(middle([1, 2, 3]), [2]);// should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]); // should FAIL
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [5]); // should FAIL
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS


// MOCHA AND CHAI TEST 

describe('Middle Test', () => {
  it('Returns [2] from [1, 2 , 3]',() => {
    assert.deepEqual(middle([1, 2 ,3]), [2]);
  });

  it('Returns [3] from [1, 2 , 3, 4, 5]',() => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('Returns [2, 3] from [1, 2 , 3, 4]',() => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});