// check object property 

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "not found"
    } 
}

console.log(checkObj("gift")); // prints pony
console.log(checkObj("pet"));
