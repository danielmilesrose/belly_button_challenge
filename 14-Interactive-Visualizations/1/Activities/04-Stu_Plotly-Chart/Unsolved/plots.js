// Copy over the variables from the previous activity
let myName = "Daniel";
let books = ["Moneyball", "Bible", "Wrestling Book"];
let timesRead = [5, 1, 3];
let title = `${myName}'s First Plotly Chart`;


// Assign `x` and `y` values for the Plotly trace object
let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

// Leave the code below unchanged
let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);