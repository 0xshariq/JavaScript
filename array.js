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
// it modified the original array
// it sorts the array in ascending order
// it uses ASCII value for sorting

// prints an unexpected output
const numbers = [400,800,1900,610,230];
numbers.sort();
console.log(numbers);


const string = ["Batman","ABC","superman","Deadpool","hawkeye"];
string.sort();
console.log(string);

// prints an expected output
// sorts the array in ascending order
const numbers = [400,800,1900,610,230];
numbers.sort((a,b) => {
  return a - b;
});
console.log(numbers);

// for descending order
const numbers = [400,800,1900,610,230];
numbers.sort((a,b) => {
  return b - a;
});
console.log(numbers);

// low to high
const userCart = [
  {productId : 1, productName : "Mobile", price : 12000},
  {productId : 2, productName : "Laptop", price : 22000},
  {productId : 3, productName : "Macbook", price : 250000},
];
userCart.sort((a,b) => {
  return a.price - b.price;
});
console.log(userCart);

// high to low
const userCart = [
  {productId : 1, productName : "Mobile", price : 12000},
  {productId : 2, productName : "Laptop", price : 22000},
  {productId : 3, productName : "Macbook", price : 250000},
];
userCart.sort((a,b) => {
  return b.price - a.price;
});
console.log(userCart);


// find method
// it returns a single value
// prints only the first occurence if true
const numbers = [1,8,9,5,2];
const even = numbers.find((number)=>{
  return number%2 === 0;
});
console.log(even);


const myArray = ["hello","cat","dog","building"];
const value = myArray.find((val) => {
  return val.length < 3;
});
console.log(value);


// every method
// it returns a boolean value
// it checks if all the elements in the array satisfies the condition or not
const numbers = [1,3,7,8,2];
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);

const userCart = [
  {productId : 1, productName : "Mobile", price : 12000},
  {productId : 2, productName : "Laptop", price : 22000},
  {productId : 3, productName : "Macbook", price : 250000},
];
const ans = userCart.every((user) => user.price < 30000);
console.log(ans)
  ;