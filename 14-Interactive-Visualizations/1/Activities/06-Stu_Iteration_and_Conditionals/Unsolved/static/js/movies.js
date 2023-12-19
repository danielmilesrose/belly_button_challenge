// Open the inspector to see the data
console.log(movies)

// Starting a profit sum
let sum = 0;

// Arrays to hold all movies by decade
movies1930s = [];
movies1940s = [];
movies1950s = [];
movies1960s = [];
movies1970s = [];
movies1980s = [];
movies1990s = [];
movies2000s = [];
movies2010s = [];

// For loop to go through all movies
// for(let i=0; i<movies.length;i++){
for(let i in movies){
  sum += movies[i].profit;
  // Init variable to hold the current movie in loop
  if(movies[i].year<1940){
    movies1930s.push(movies[i]);
  }else if(movies[i].year<1950){
    movies1940s.push(movies[i]);
  }else if(movies[i].year<1960){
    movies1950s.push(movies[i]);
  }else if(movies[i].year<1970){
    movies1960s.push(movies[i]);
  }else if(movies[i].year<1980){
    movies1970s.push(movies[i]);
  }else if(movies[i].year<1990){
    movies1980s.push(movies[i]);
  }else if(movies[i].year<2000){
    movies1990s.push(movies[i]);
  }else if(movies[i].year<2010){
    movies2000s.push(movies[i]);
  }else{
    movies2010s.push(movies[i]);
  }


  // Increment the sum variable by the amount of profit


  // Conditional statements to determine array assignment
}



// Find the average profit
let avg = sum / movies.length;

// Print results
console.log("---------");
console.log(`${movies1930s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1930s.`);
console.log(`${movies1940s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1940s.`);
console.log(`${movies1950s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1950s.`);
console.log(`${movies1960s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1960s.`);
console.log(`${movies1970s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1970s.`);
console.log(`${movies1980s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1980s.`);
console.log(`${movies1990s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 1990s.`);
console.log(`${movies2000s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2000s.`);
console.log(`${movies2010s.length} of the top ten highest grossing (adjusted for inflation) movies are from the 2010s.`);
console.log(`The average movie profit (adjusted for inflation) is ${avg}.`);
console.log("---------");
