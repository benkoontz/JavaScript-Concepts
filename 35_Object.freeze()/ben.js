// Object.freeze is used to keep objects from changing


function freezeObj() {
    "use strict";
    const MATH_CONSTAINTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTAINTS) // prevents PI from being changes
    
    try {
        MATH_CONSTAINTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTAINTS.PI
}

const PI = freezeObj();

console.log(PI);
