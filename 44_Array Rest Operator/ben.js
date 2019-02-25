// Array rest operator

const source = [1,2,3,4,5,6,7,8]
function removeFirstTwo(list) {
    
    const [ , , ...arr] = list; // remove first two elements
    return arr;
}
const arr = removeFirstTwo(source)
console.log(arr) prints [3,4,5,6,7,8]
console.log(source) prints [1,2,3,4,5,6,7,8]
