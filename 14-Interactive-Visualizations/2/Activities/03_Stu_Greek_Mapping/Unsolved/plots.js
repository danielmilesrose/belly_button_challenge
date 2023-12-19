console.log(searchResults);

// Trace for the Greek Data
// let greekName = searchResults.map(x=>x.greekName);

// // Data trace array


// // Apply a title to the layout


// // Render the plot to the div tag with id "plot"
// // Trace 2 for the Roman Data
// let trace1 = {
//     x: searchResults.map(x=>x.greekName),
//     y: searchResults.map(x=>x.greekSearchResults),
//     name: "Greek",
//     type: "bar"
//   };
  
//   // Create data array
//   let data = [trace1];
  
//   // Apply a title to the layout
//   let layout = {
//     title: "Greek search results",
//     // barmode: "group",
//     // Include margins in the layout so the x-tick labels display correctly
//     margin: {
//       l: 50,
//       r: 50,
//       b: 200,
//       t: 50,
//       pad: 4
//     }
//   };
  


// Trace1 for the Greek Data
let trace1 = {
  x: searchResults.map(x=>x.pair),
  y: searchResults.map(x=>x.greekSearchResults),
  text: searchResults.map(x=>x.greekName),
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: searchResults.map(x=>x.pair),
  y: searchResults.map(x=>x.romanSearchResults),
  text: searchResults.map(x=>x.romanName),
  name: "Roman",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group",
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
