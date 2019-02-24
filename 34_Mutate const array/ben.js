// mutate an array declared with const


const s = [5,6,7]
function editInPlace() {
    "use strict";


//s = [2,5,6]
s[0] = 2;
s[1] = 5;
s[2] = 7;
}

editInPlace();
console.log(s) // outputs [2,5,7]
