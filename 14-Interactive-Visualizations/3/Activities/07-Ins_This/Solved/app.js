// d3.selectAll("button").on("click", function(){
//   let clicked = d3.select(this);
//   console.log(clicked.text());
// });
// d3.selectAll("li").on("click", function(){
//   let clicked = d3.select(this);
//   console.log(clicked.text());
// });

































d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
});

d3.selectAll("li").on("mouseover", function() {
  // you can select the element just like any other selection
  let listItem = d3.select(this);
  let color = listItem.style("color")
  if (color !=="blue") listItem.style("color", "blue");
  else listItem.style("color", "red");

  let listItemText = listItem.text();
  console.log(listItemText);
});
