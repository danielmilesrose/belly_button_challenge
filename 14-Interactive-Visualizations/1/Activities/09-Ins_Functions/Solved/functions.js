"use strict";
// # Simple print statement
function print_hello(){
    console.log("Hello there!")
}


// # Takes two numbers and adds them
function addition(a, b){
    return a + b;
}

// # Takes in a list and loops through
function list_loop(user_list){
    for (var i in user_list){
        console.log(i);
    }
}

// # Uses a previous declared function
function double_addition(c, d){
    var total = addition(c, d) * 2;

    return total;
}


// # Call the functions below

// # Run print function
print_hello();

// # Print result of addition function
console.log(addition(44, 50));

// # Create a list and pass through the loop function
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
list_loop(friends);

// # Print result of double_addition function
console.log(double_addition(3, 4));

// # Python built in function for rounding
let long_decimal = 112.34534454;
let rounded_decimal = Math.round(long_decimal*10000)/10000;
console.log(rounded_decimal);
