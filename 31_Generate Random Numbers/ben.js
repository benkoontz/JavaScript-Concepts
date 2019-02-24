// generate random fractions
function randomFraction() {
    
    return Math.random();
}

console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random()*20);

// generate random whole numbers
function randomWholeNum() {
    
    return Math.floor(Math.random() * 10); // random number between 0 and 9
}

console.log(randomWholeNum());

// generate random numbers within a range
function range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myRandom  = range(1,5)
console.log(myRandom)
