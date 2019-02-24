// profile lookup example

var contact = [
    {
        "firstname": "ben",
        "lastname": "hello",
        "id": 1231
        
    },
    {
        "id": "hello"
    }
];

function lookUpProfile(name, prop) {
    for(var i = 0; i < contact.length; i++) {
        if(contact[i].firstname === name){
          return contact[i][prop]  || "No such property"; 
        }
    }
    return "no such contact";    
}

//var data = lookUpProfile("ben", "firstname"); // returns ben
// var data = lookUpProfile("ben", "lastname"); // returns hello
 var data = lookUpProfile("ben", "id"); // returns 1231
console.log(data)
