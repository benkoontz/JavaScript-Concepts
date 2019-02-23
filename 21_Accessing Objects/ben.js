// accessing objects

var dog = {
    "name": "ben",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var ben = dog.name
var hi = dog.friends
var yep = dog["tails"];
var nope = "tails";
var tails = dog[nope];

console.log(ben + " " + hi + " " + yep + " " + tails) // prints ben everything 1 1
