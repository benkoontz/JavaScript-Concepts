// strict equality operator, comapres type and value

function booleans(a,b) {
    if (a === b ) {
        return "equal";
    }
    return "not equal"
}
console.log(booleans(10,"10")) // prints not equals
console.log(booleans(10,10)) // prints equal
