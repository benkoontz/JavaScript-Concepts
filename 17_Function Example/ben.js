// function that ads items to a list

function queue(arr, item) {
    
    arr.push(item) // add item to end
    return arr.shift(); // remove first item
}

var arr = [1,2,3]

// json .stringinfy changes array to a string

console.log("before " + JSON.stringify(arr))
console.log(queue(arr, 4));
console.log("after " + JSON.stringify(arr))

/* prints
>before [1,2,3]
>1
>after [2,3,4]
*/
