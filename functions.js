function findTarget(array, target){
  for (let i = 0; i < array.length; i++) {
     if (array[i] === target) {
        return i;
     }  
  }
  return -1
}
const myArray = [1,5,36,89];
const ans = findTarget(myArray,5);
console.log(ans);



// arrow function
const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
     if (array[i] === target) {
        return i;
     }  
  }
  return -1
}
const myArray = [1,5,36,89];
const ans = findTarget(myArray,5);
console.log(ans);



// default parameters
function sum(a,b = 8){
  return a + b;
}
const ans = sum(5);
console.log(ans);


// rest parameters
function fun(a,b,...c){
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}
fun(3,4,5,6,7,8,9,10);

function addAll(...numbers){
  let sum = 0;
  for (let number of numbers) {
     total = sum += number;
  }
  return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);



// destructuring
const person = 
  {
    firstName : "John",
    gender : "Male",
    age : 25
  };
// 1st method
function printDetails({firstName ,gender ,age}){
  console.log(firstName);
  console.log(gender);
  console.log(age);
}
printDetails(person);

const person = 
  {
    firstName : "John",
    gender : "Male",
    age : 25
  };
// 2nd method
function printDetails({firstName : name,gender : sex,age : a}){
  console.log(name);
  console.log(sex);
  console.log(a);
}
printDetails(person);



// callback function
function fun1(callback){
  console.log("fun1 is called");
  callback("Sharique");
}
function fun2(name){
  console.log("fun2 is called");
  console.log(`Your name is ${name}`);
}
fun1(fun2);



// function returning function
function myfun(){
  function hello(){
    return "Hello World"
  }
  return hello;
}
const ans = myfun();
console.log(ans());