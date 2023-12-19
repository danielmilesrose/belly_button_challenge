console.log(searchResults);

// Greek god names
let gNames = searchResults.map((x) => x.greekName);
console.log(gNames);

// Trace for the Greek Data

// Data trace array
let gSearch = searchResults.map((x) => x.greekSearchResults);
console.log(gSearch);

let trace1 = {
  x: gNames,
  y: gSearch,
  name: "Greek",
  type: "bar"
};

let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "Greek God Search Results",
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
