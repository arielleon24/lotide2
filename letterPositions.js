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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (letter !== " ") {
      if(!results[letter]) {
        results[letter] = [i]
      } else {
        results[letter].push(i)
      }
    }
  }
  console.log(results)
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);