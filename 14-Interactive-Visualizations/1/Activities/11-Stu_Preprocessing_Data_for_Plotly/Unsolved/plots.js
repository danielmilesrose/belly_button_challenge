let ratings = ['G', 'PG', 'PG-13', 'R']
console.log(films[0]);
// Create a function to calculate the average of a metric by rating
function calculateAverage(films, metric, rating){
    var sum = 0;
    var count = 0;
    for (var i in films){
        if(rating==films[i].rating){
            count++;
            sum += films[i][metric];
        }
    }
    return sum/count;
}

// Invoke the metric average function
let metrics = ['rental_duration', 'rental_rate', 'replacement_cost', 'length']


var all_plot_data = {};
for (var i in ratings){
    var rating = ratings[i]
    all_plot_data[rating] = {
        x:[],
        y:[]
    };
    for (var j in metrics){
        var metric = metrics[j];
        console.log(`The Average ${rating} for ${metric} in fils is ${calculateAverage(films, metric, rating)}`);
        // all_plot_data[rating][metric] = calculateAverage(films, metric, rating);
        all_plot_data[rating]["x"].push(metric);
        all_plot_data[rating]["y"].push(calculateAverage(films, metric, rating));
    }
}
console.log(all_plot_data);
// Create a function to plot the average metric by rating results
var teace = [];
for (x in all_plot_data){
    var plot_id = `plot-${x}`;
    console.log(plot_id);
    teace.push({
        x: all_plot_data[x]["x"],
        y: all_plot_data[x]["y"],
        name:x,
        type:"bar"
    })
}
Plotly.newPlot(plot_id, teace)

// Invoke the plot creating function
