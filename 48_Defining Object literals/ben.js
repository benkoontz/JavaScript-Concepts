// defining object literals
// key is the name of the variable and value is the value of the variable
const createPerson = (name,age,gender) => 
({name, age, gender})
   

console.log(createPerson("Ben", 20, "male"))
// returns the object : {name: "Ben", age: 20, gender: "male"}
