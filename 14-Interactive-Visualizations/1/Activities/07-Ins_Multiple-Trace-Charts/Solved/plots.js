// Create our first trace
let trace1 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 5, 10, 15, 20, 25],
  type: "bar",
  name: "bar",
};

// Create our second trace
let trace2 = {
  x: [0, 1, 2, 3, 4, 5],
  y: [0, 1, 4, 9, 16, 25],
  type: "scatter",
  name: "scatter",
};

// The data array consists of both traces

// Note that we omitted the layout object this time
// This will use default parameters for the layout


let data = [trace1, trace2];

let layout = {
  title: "A Plotly plot",
  xaxis:{
    title: "x Axis"
  },
  yaxis:{
    title: "Y Axis"
  },
};

Plotly.newPlot("plot", data, layout);