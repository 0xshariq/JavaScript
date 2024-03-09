// array destructuring

const myArray = ["value1","value2","value3","value4","value5"];
const myNewArray = [];
// destructuring assignment
let [Val1,Val2,Val3] = myArray;
myNewArray.push("value4","value5");
console.log(myNewArray);
console.log(Val1);
console.log(Val2);
console.log(Val3);


// IMPORTANT ARRAY METHOD

// forEach loop
// take callback function as an argument
const numbers = [4,8,9,6,2];
numbers.forEach((number,index) => {
  console.log('index is ${index} and number is ${number}');
})

const users = [
  {userId : 1, userName : "Batman", gender : "Male"},
  {userId : 2, userName : "Superman", gender : "Male"},
  {userId : 3, userName : "Wonder Woman", gender : "Female"},
];
const detail = users.forEach((user) =>{                  console.log(user.userId);             console.log(user.userName);  
});
console.log(detail);


// map method
// it returns a new array
const numbers = [4,8,9,6,2];
const square = numbers.map((number)=>{
  console.log(number * number,index);
});
console.log(square);

const users = [
  {userId : 1, userName : "Batman", gender : "Male"},
  {userId : 2, userName : "Superman", gender : "Male"},
  {userId : 3, userName : "Wonder Woman", gender : "Female"},
];
const username = users.map((user) => {
  console.log(user.userId);
  console.log(user.userName);
});
console.log(username);


// filter method
// it returns a new array
const numbers = [4,8,9,6,2];
const even = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(even);

const odd = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(odd);


// reduce method
// it returns a single value
const numbers = [4,8,9,6,2];
const sum =  numbers.reduce((accumulator,currentValue) = > {
  return accumulator + currentValue;
});
console.log(sum);

const userCart = [
  {productId : 1, productName : "Mobile", price : 12000},
  {productId : 2, productName : "Laptop", price : 22000},
  {productId : 3, productName : "Macbook", price : 250000},
];
const Price = userCart.reduce((totalPrice,currentPrice) => {
  return totalPrice + currentPrice.price;
},0);
console.log(Price);


// sort method
// 