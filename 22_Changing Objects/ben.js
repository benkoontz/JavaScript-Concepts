

// changing object property
var dog = {
    "name": "ben",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
    7 : 8
};

dog.name = "hello"
console.log(dog.name) // prints hello

// changing object properties
dog.bark = "bow wow" // adds new property bark
console.log(dog.bark) // prints bow wow

// delete property object
delete dog.bark;
console.log(dog.bark) // prints null
