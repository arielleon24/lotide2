const { assert } = require("chai");
const tail = require("../tail");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// result = tail(words); // no need to capture the return value since we are not checking it
// assertArraysEqual(tail(words), ["Lighthouse", "Labs"]); /// will fail unless you use assertArraysEqual
// assertEqual(words.length, 3); // original array should still have 3 elements!


//// MOCHA AND CHAI 

describe("Tail Function", () => {
  it("Return ['lighthouse', 'labs'] with ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'lighthouse', 'labs']), [ 'lighthouse', 'labs']);
  });

  it("Return ['2', '3'] from ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), [ '2', '3']);
  });

});