





    const takeUntil = function(array, callback) {
    const resultArr = [];
    for (let item of array) {
      if (!callback(item)){
        resultArr.push(item)
      } else {
        return resultArr;
      }
    }
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// X in the line below refers to the item with which we are testing the condition. As long as when X is strictly equal to ','
// The function (x => x === ',') will test to true. 
// X must be given a value when passed into takeUntil and that value is taken from iterating over the array.

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);