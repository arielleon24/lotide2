const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱😱😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (!result[letter]) {
        result[letter] = 1;
      } else {
        result[letter] += 1;
      }
    }
  }
  console.log(result);
};

countLetters("LHL");
-(
  // L:2 - H:1
  countLetters("abracadaba")
);
countLetters("we need each other");
