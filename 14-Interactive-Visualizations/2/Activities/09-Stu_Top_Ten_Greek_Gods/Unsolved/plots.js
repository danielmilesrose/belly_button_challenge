console.log(searchResults);

// Sort the data by Greek search results descending
let sortedByGreekSearch = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);


let slicedData = sortedByGreekSearch.slice(0, 10);

slicedData.reverse();

// Trace for the Greek Data
let trace1 = {
  x: slicedData.map(object => object.greekSearchResults),
  y: slicedData.map(object => object.greekName),
  text: slicedData.map(object => object.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

data = [trace1];

// Slice the first 10 objects for plotting

// Reverse the array to accommodate Plotly's defaults


// Apply a title to the layout
let layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

// Data trace array


// Apply a title to the layout


// // Render the plot to the div tag with id "plot"
// // Trace 2 for the Roman Data
  
//   // Create data array
  
//   // Apply a title to the layout
// // Render the plot to the div tag with id "plot"



