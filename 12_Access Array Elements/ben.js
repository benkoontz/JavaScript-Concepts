// arrays can store different data types

var array = [7,8,9]
array[1] = "ben"; 

console.log(array)

var multiArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = multiArray[0][0] // gets 1
var myData = multiArray[2][1] // gets 8
var myData = multiArray[3][1] // gets 13


console.log(myData)
