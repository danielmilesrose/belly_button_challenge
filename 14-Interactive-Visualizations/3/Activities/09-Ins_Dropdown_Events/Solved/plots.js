// Initializes the page with a default plot
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];

  Plotly.newPlot("plot", data);
}

// let selDataset = d3.select("#selDataset");

// selDataset.on("change", function(){
//   let changed = d3.select(this).property("value");
//   if (changed=="dataset1"){
//     var x= [1, 2, 3, 4, 5];
//     var y= [1, 2, 4, 8, 16];
//     var type = "line";

//   }else{
//     var x = [10, 24, 31, 46, 53];
//     var y = [11, 22, 43, 84, 16];
//     var type = "bar";
//   }
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
//   Plotly.restyle("plot", "type", [type]);

//   console.log(changed);
// })
























// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  else if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();