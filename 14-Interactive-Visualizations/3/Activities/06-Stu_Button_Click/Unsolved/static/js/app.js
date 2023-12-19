// Randomly select an episode number for Star Wars
let text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
let upvote = d3.select(".upvote");
let downvote = d3.select(".downvote");

// Select the counter h3 element
let counter = d3.select(".counter");
// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", d=>{
  var newcounter = +counter.text();
  counter.text(newcounter+1)
})
// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", d=>{
  var newcounter = +counter.text();
  if (newcounter<=0) newcounter = 0;
  else newcounter--;
  counter.text(newcounter)
})
