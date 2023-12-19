// Create a variable called 'name' that holds your name in a string
let myName = "Daniel";

// Create another variable called 'title' using a string template to say "<your name>'s First Plotly Chart"
let title = `${myName}'s First Plotly Chart`;


// Create an array called 'books' of your favorite book titles
let books = ["Moneyball", "Bible", "Wrestling Book"];

// Create another array called 'timesRead' of how many times you've read each respective book
let timesRead = [5, 1, 3];


// Create a JavaScript object called 'myData' with four key-value pairs
// 1. name
// 2. favoriteBooks
// 3. timesRead
// 4. age

let myData = {
    name: myName,
    favoriteBooks: books,
    timesRead: timesRead,
    age: 35
  };



// use console.log() to print 'myData' to the console. Explore the output in the Chrome Console
console.log(myData)


// BONUS: in 'myData', consolidate the 'favoriteBooks' and 'timesRead' into one key called 'books' where the value is
// another javascript object, with keys 'titles' and 'timesRead'. 