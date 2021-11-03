/**
 * * hoisting is concept on javascript that we can used a variable or function that not be declared
 * * it allows us to call functions and variable (declared with var) before they are being defined by moving them
 * * to the top of their scope before execution of code begins.
 */

// * Variable Hoisting

// undeclared variable
x = 1;

console.log(x); // 1
console.log(typeof x); // number

//variable declared
var x;

// * Function Hoisting

// undeclared variable
console.log(functionBelow("Hello"));

// function declared
function functionBelow(greet) {
  return `${greet} world`;
}
