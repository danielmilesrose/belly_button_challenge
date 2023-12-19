// Sort the array in descending order
let numArray = [1, 2, 3, 12, 20, 4];
// numArray.sort(function(firstNum, secondNum){
//   return secondNum - firstNum;

// });
numArray.sort((a, b) => a - b);
console.log(numArray);

function sort_asc(firstNum, secondNum) {
  return firstNum - secondNum;
}
function sort_desc(firstNum, secondNum) {
  return secondNum - firstNum;
}
let sort_desc = (firstNum, secondNum) => secondNum - firstNum;

numArray.sort(sort_asc);

// Returns [3, 2, 1]
console.log(numArray);
let numArray1 = [1000, 2000, 30000100101, 12001101010, 20010101, 4010101];

numArray1.sort(sort_desc);

// Returns [3, 2, 1]
console.log(numArray1);

// Sort the array in ascending order
let numArray2 = [3, 2, 1];
numArray2.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

// Returns [1, 2, 3]
console.log(numArray2);

// Sort the array in ascending order, using an arrow function
let numArray3 = [3, 2, 1];
numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
console.log(numArray3);

// Reverse the array
let numArray4 = [1, 2, 3];
numArray4.reverse()
console.log(numArray4);
