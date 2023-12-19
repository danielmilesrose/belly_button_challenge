// An array of each country's numbers
console.log(data);
/* <select id="selDataset">
<option value="dataset1">DataSet1</option>
<option value="dataset2">DataSet2</option>
</select> */


// let australia = Object.values(data.australia);
// let brazil = Object.values(data.brazil);
// let uk = Object.values(data.uk);
// let mexico = Object.values(data.mexico);
// let singapore = Object.values(data.singapore);
// let southAfrica = Object.values(data.southAfrica);

// // Create an array of category labels
// let labels = Object.keys(data.australia);

// @ADD YOUR CODE HERE
let selector = d3.select("#selector");
Object.keys(data).forEach(d=>{
    selector.append("option").attr("value", d).text(d.toUpperCase());
    console.log(d);
});

selector.on("change", function(){
    let selectedName = selector.property("value");
    console.log(data[selectedName]);
    creatPlot(data[selectedName], selectedName.toUpperCase());
});
function creatPlot(data, name){
    trace1 = [{
        labels: Object.keys(data),
        values: Object.values(data),
        type: "pie"
    }];
    
    Plotly.newPlot("pie", trace1, {title:name});
    
}
creatPlot(data.australia, "Australia");
