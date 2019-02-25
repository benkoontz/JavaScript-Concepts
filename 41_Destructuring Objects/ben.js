// destructuring objects

const temp = {
    today: 77.5,
    tomorrow: 79
};

function getTemp(avgTemp) {
    "use strict";
    
    const {tomorrow : tempOfTomorrrow } = avgTemp;
    return tempOfTomorrrow
}

console.log(getTemp(temp)) // outputs 79
