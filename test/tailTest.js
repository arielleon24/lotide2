const tail = require("../tail");
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual")

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
result = tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]); /// will fail unless you use assertArraysEqual
assertEqual(words.length, 3); // original array should still have 3 elements!