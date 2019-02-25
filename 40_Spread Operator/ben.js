// spread operator

const arr1 = ['Jan', 'Feb']
let arr2;
(function() {
    //arr2 = arr1 // outputs potato, feb
    arr2 = [...arr1] // outputs jan, feb
    arr1[0] = 'potato'
})();
console.log(arr2)
