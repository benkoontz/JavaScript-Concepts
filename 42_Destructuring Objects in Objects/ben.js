// destructuring objects within object

const local_forecast = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function maxOfTomorrow(forecast) {
    "use strict"
    
    const { tomorrow: { max : maxOfTommorw}} = forecast;
    return maxOfTommorw
}

console.log(maxOfTomorrow(local_forecast))
