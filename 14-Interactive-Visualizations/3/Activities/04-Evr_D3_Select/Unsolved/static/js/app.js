// The new student and grade to add to the table
let newGrade = ["Daniel", 96]

// Use D3 to select the table
let table = d3.select("table");

// Use D3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#table-striped
d3.select("table").attr("class", "table table-striped");

// Use D3 to select the table body
let body = d3.select("tbody").append("tr");

// Append one table row `tr` to the table body
// let row = body.append("tr");

// Append one cell for the student name
body.append("td").text(newGrade[0]);

// Append one cell for the student grade
body.append("td").text(newGrade[1]);
