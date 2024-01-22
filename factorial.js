
let n = prompt("Enter number");
let f = 1;
for (let i = 1; i <= n; i++) {
  f *= i;
}
document.write("Factorial is = " + f);