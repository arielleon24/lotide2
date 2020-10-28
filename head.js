const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed ❌: ${actual} !== ${expected}`);
  }
};

const arrayHead = (array) => {
  return array[0];
};


// -TEST CODE-

assertEqual(arrayHead([5,6,7]), 7);
assertEqual(arrayHead(["Hello", "Lighthouse", "Labs"]), "Hello");