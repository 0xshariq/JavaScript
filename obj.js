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


// object.values()
// gives an array in which all the values are present
console.log(Object.values(person));


// object.entries()
// gives an array in which all the keys and values are present
console.log(Object.entries(person));


// spread operator in objects
// it is used to copy the object
const obj1 = {
  key1 = "value1",
  key2 = "value2"
}
const newObj = {...obj1};
console.log(newObj);


// object destructuring
// it is used to copy the objects keys value in variable
const identity = {
  name : "Batman",
  age : 29,
  gender : "Male",
  year : 1990,
  address : Gotham City
}
const {name ,age ,gender,year ,address} = identity;
console.log(name ,age ,gender,year ,address);
// another method
const {name : n ,age : a ,gender : g,...rest} = identity;
console.log(n,a,g);
console.log(rest);//gives an array


// object inside array
const users = [
  {userId : 1, userName : "Batman", gender : "Male"},
  {userId : 2, userName : "Superman", gender : "Male"},
  {userId : 3, userName : "Wonder Woman", gender : "Female"},
];
for (let user of users ) {
   console.log(users.userId);
   console.log(users.userName);
   console.log(users.gender);
}


// nested destructuring
const [{userId},{userName},{gender}] = users;
console.log(userId,userName,gender);
// another method
const [{userId : Id},{userName : name},{gender : g}] = users;
console.log(Id,name,g);