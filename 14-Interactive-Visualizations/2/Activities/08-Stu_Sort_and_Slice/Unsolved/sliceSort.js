// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];
console.log(numArray);

// Sort the array in descending order and assign the results to a variable
let desc = numArray.sort((a, b) => b - a);
console.log(desc);


// Reverse the array order
desc.reverse()
console.log(desc);

// Slice the first five elements of the sorted array and assign to a variable
let firstFive = desc.slice(0,5);
console.log(firstFive);