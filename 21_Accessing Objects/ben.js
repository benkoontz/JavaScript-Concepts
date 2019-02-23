// accessing objects

var dog = {
    "name": "ben", // name is a property and ben is a value
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    7 : 8
};

var hello = dog[7]
var ben = dog.name
var hi = dog.friends
var yep = dog["tails"];
var nope = "tails";
var tails = dog[nope];

console.log(ben + " " + hi + " " + yep + " " + tails + " " + hello) // prints ben everything 1 1 8
