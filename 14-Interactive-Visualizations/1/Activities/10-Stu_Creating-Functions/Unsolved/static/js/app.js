// Array of movie ratings
let movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
console.log(movieScore);
// Mean is the average of all the values.
function mean(num){
    var sum = 0;
    for (i in num){
        sum+=num[i];
    }
    return sum/num.length;
}
console.log(mean(movieScore));


// Variance can be found by subtracting the mean from each number in the data set,
// squaring the result, and then averaging the square differences.

function Variance(num){
    var meanVal = mean(num);
    var sum = 0;
    for (i in num){
        sum += (num[i] - meanVal) ** 2;
    }
    return sum/num.length;
}
console.log(Variance(movieScore));


// Standard deviation is the square root of the variance
function Std(num){
    return Math.sqrt(Variance(num));
}
console.log(Std(movieScore));




// Print to the console the Movie Statistical Analysis


// Print to the console the Rainfall Statistical Analysis
let monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]


// Print to the console the Running Statistical Analysis
let mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]
