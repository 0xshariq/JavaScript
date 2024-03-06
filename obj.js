// print object using loop

const person = {
  name : "Sharique",
  age : 22,
  gender : "Male",
  hobbies : ["Gaming","Coding"],
  address : {
    district : "Thane",
    city : "Mumbai",
    country : "India"
  }
}
// for in loop

for(let key in person){
  console.log(`${key} : ${person[key]}`);
}

// object.keys()
// gives an array in which all the keys are present
console.log(Object.keys(person));