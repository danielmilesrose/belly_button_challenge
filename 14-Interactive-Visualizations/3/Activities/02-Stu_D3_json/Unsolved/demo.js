// Get the Roadster endpoint
url1 = "https://api.spacexdata.com/v4/roadster"
url2 = "https://api.spacexdata.com/v4/capsules"

// Fetch the JSON data and console log it
d3.json(url1).then(d=>{
    console.log("roadster", d);
})

// Get the capsules endpoint
d3.json(url2).then(d=>{
    console.log("capsules", d);
})


// Fetch the JSON data and console log it