// higher order arrow functions

const increment = (function()  {
    return function increment(number,value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2)); // prints 7
console.log(increment(5)) // prints 6
