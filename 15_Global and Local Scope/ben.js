// scope
// global vs. local

var myVar = 10; // global variable

function localScope() {
    var myVar = 5; // local variable
    console.log(myVar);
}

localScope(); // prints 5
console.log(myVar) // prints 10
