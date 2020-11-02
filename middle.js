const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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

module.exports = middle