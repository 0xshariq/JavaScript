// object
// adding in object using bracket notation 
let key = "email";
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
// another method to print object key value
console.log(person["name"]);


console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.hobbies[0],person.hobbies[1]);


console.log(person.address.city);
console.log(person.address.country);
console.log(person.address.district);

// adding in object using dot notation
person.address.building = "Palace";

console.log(person.address.building);

// adding in object using bracket notation
person[key] = "ztejd@example.com";

console.log(person[key]);
