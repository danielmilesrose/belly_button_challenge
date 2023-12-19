console.log(searchResults);

// Create a custom function to return Roman gods with more than 1 million search results
let popularRoman = searchResults.filter(function (god) {
  return god.romanName, god.romanSearchResults > 100000000;
});

console.log(popularRoman);

// Call the custom function with filter()

// Trace for the Roman Data
let rNames = popularRoman.map((x) => x.romanName);
let rResults = popularRoman.map((x) => x.romanSearchResults);

// Data trace array
let trace1 = {
  x: rNames,
  y: rResults,
  name: "Roman",
  type: "bar"
};

let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "Roman Gods with +100M Search Results",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);