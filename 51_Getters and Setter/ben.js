// getters and setters
class Book {
    constructor(author) {
        this._author = author;
    }
    
// getter
get writer() {
    return this._author
}

// setter 
set writer(updatedAuthor) {
    this._author = updatedAuthor
    }
}


function makeClass () {
    class Thermostat {
        constructor(temp) {
            this._tenp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._tenp;
        }
        set temperature(updateedTemp) {
            this._tenp = updateedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature
console.log(temp) // prints 26
