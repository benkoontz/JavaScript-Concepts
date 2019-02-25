// higher order arrow functions

const realNumberArray = [4,5.6,-9.8,3.14]

// square all numbers that are real and are greater than 0
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x); 
    return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers)
