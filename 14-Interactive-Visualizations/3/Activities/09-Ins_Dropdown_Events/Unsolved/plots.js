var x = [1,2,3,4,5];
var y = [4,3,6,8,7];

data = {
    x: x,
    y: y
}

Plotly.newPlot("plot", [data]);

var selDataset = d3.select("#selDataset");
selDataset.on("change", function(){
    var elem = d3.select(this);
    elemVal = elem.property("value");
    console.log(elemVal);
    if(elemVal=="dataset1"){
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8, 16];
        type = "line";
    }else{
        x = [10, 20, 30, 40, 50];
        y = [1, 10, 100, 1000, 10000];
        type = "bar";
    }
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
    Plotly.restyle("plot", "type", [type]);
})