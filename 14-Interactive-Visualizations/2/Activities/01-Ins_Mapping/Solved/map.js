let theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

console.log(theStagesOfJS)

function return_hello_item(item, index){
  return `${index}: ${item}`;
}

let mapStorge2 = theStagesOfJS.map(return_hello_item);
console.log(mapStorge2)


let mapStorge = theStagesOfJS.map(function(item, index){
  return `${index}: ${item}`;
});

console.log(mapStorge)

let mapStorge3 = theStagesOfJS.map((item, index) =>`${index}: ${item}`);

console.log(mapStorge3)

let mapStorge4 = theStagesOfJS.map(item => item );

console.log(mapStorge4)
















// Using the .map method to create an array
let mapSimpleArray = theStagesOfJS.map(function(item) {
  return item;
});

console.log("Map:", mapSimpleArray);

// Map will also provide the index position of the array.
// This is similar to enumerate in Python.
let mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
  return `Stage ${index}: ${item}`;
});

console.log("Map With Index:", mapArrayWithIndex);

// Note: The original array is unchanged
console.log("Original:", theStagesOfJS);

// Mapping over an array of objects
let students = [
    { name: "Malcolm", score: 80 },
    { name: "Zoe", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Wash", score: 79 }
];

let names = students.map(function(student) {
  return student.name;
});

console.log("Names:", names)
let scores = students.map(function(student) {
  return student.score;
});

console.log("Scores:", scores)

// An Arrow function is a new concise syntax for functions
// Arrow functions allow us to drop the `function` keyword and just show the parameters.
// Note: The fat arrow `=>` that was added to indicate an arrow function.
let mapArrow1 = theStagesOfJS.map((item) => {
    return item;
});
  
console.log("Arrow1:", mapArrow1);

// And we can drop the `return` keyword. The return is implied.
let mapArrow2 = theStagesOfJS.map(item => item);

console.log("Arrow2:", mapArrow2);

// We can also provide the index position of the array.
let mapArrow3 = theStagesOfJS.map((item, index) => `Stage ${index}: ${item}`);

console.log("Arrow3:", mapArrow3);