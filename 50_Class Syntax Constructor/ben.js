// class syntax to define a constructor function
class car {
    constructor(target) {
    this.target = target
    }
}

var ben = new car('nissan')
console.log(ben.target) // prints nissan

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot')
console.log(carrot.name) // prints carrot
