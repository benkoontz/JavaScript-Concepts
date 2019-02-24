function checkSign(num) {
    // ternary operator
    return num > 0 ? "positive" : num < 0 ? "negative"  : "zero"  
}

console.log(checkSign(0)) // returns 0
