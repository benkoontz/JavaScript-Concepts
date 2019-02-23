// checking properties 


function checkObj(val) {
    
    var result = "";
    
    var lookup = {
    "alpha": "ben",
    "bravo": "hello",
    "charlie": "yep"
};

    result = lookup[val];

    return result;
}

console.log(checkObj("alpha")); // prints ben
