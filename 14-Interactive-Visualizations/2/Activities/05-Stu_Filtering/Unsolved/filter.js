// An array of objects
let roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}
];

// Create a custom function to return players who made the team
let madeIt = roster.filter(function (person) {
  return person.name, person.madeTeam === true;
});

console.log(madeIt);

// Call the custom function with filter()

// Display the results


// Determine how many players made the cut
number = madeIt.length;
// Display the results
console.log(`${number} players made the team.`);