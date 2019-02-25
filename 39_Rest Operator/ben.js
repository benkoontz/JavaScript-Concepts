// rest operatir

const sum = (function() {
    return function sum(...args) {

        return args.reduce((a,b) => a + b, 0);
    }
}) ();
console.log(sum(1,2,3, 4));// outputs 10
