const url = "https://api.spacexdata.com/v4/launchpads";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
read_promise(dataPromise);
// Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });
d3.json(url).then(data => { 
  read_data(data);
});
// console.log(data);


function read_data(data_collected){
  console.log(data_collected);
}

function read_promise(data_collected){
  data_collected.then(d=>{
    console.log(d);
  });
}