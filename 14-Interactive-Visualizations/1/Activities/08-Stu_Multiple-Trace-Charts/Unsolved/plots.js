console.log(searchResults);

// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// YOUR CODE HERE
// For loop to populate arrays
for (i in searchResults){
    names.push(searchResults[i].pair);
    greekNames.push(searchResults[i].greekName);
    romanNames.push(searchResults[i].romanName);
    greekSearchResults.push(searchResults[i].greekSearchResults);
    romanSearchResults.push(searchResults[i].romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
    x: names, 
    y: greekSearchResults,
    text: greekNames,
    name: "Greek",
    type: "bar"

}

// Trace 2 for the Roman Data
let trace2 = {
    x: names, 
    y: romanSearchResults,
    text: romanNames,
    name: "Roman",
    type: "bar"
}


// Create data array
var data = [trace1, trace2]

// Apply a title to the layout
var layout ={
    title : "Greek vs Roman Gods"
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);