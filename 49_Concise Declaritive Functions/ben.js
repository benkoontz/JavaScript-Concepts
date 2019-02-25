// concise declarative functions
// putting function in an object

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict"
        this.gear = newGear
    }
};

bicycle.setGear(3);
console.log(bicycle.gear) // prints 3
