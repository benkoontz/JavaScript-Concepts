// destructuring arrays

const [z,x, , y] = [1,2,3,4,5,6]// skip third element
console.log(z,x,y) // prints 1,2,4

let a = 8, b = 6;
(() => {
    "use strict";
    [a,b] = [b,a] // switch 6 and 8
})();
console.log(a)
console.log(b)
