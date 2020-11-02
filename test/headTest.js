const assert = require('chai').assert;
const head = require("../head");
// const assertEqual = require("../assertEqual"); NOT NEEDED with Mocha and Chai

// -TEST CODE-

// assertEqual(head([5,6,7]), 7);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// MOCHA AND CHAI FORMAT

describe("Testing Head", () => {
  it("Returns 1 for [1, 2, 3]", () =>{
    assert.strictEqual(head([1, 2, 3]), 1); 
  });

  it("Returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

});