// accessing nested objects



var storage = {
    "car": {
        "inside": {
            "glove box" : "maps",
            "passenger seat": "crumbs"
        },
        "outside" : {
            "trunk": "jack"
        }
    }
};

var gloveBox = storage.car.inside["glove box"];
console.log(gloveBox) // prints maps
