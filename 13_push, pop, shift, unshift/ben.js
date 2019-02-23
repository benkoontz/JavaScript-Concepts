// push, pop, shift, unshift functions

var array = ["ben", "hello"]
array.push("yep", "nope")

console.log(array) //adds yep and nope to the end

var array2 = [1,2,3];
var remove = array2.pop(); // removes last element, 3
console.log(array2); // prints [1,2]
console.log(remove) // prints 3

var shift = array2.shift(); // removes first element
console.log(array2) // prints 2

array.unshift("yes") // adds yes to the beggining
console.log(array)
