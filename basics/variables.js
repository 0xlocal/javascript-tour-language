// * JavaScript is case-sensitive and uses the Unicode character set

// * declares a variable, optionally initializing it to a value
var cools = "cools";
console.log(cools);
console.log(typeof cools);

// * declares a block-scoped, local variable, optionally initializing it to a value
let great = "great";
console.log(great);
console.log(typeof great);

// * declares a block-scoped, read-only named constant
const phi = 3.14;
console.log(phi);
console.log(typeof phi);

// * keyword var can be used to declare both local and global variables, depending on the execution context
var xx = 42;

// * const or let can be used to declare a block scope local variable
let yy = 13;

// * undeclared global variable
z = 18;

// * evaluating variables
var a;
console.log("The value of a is " + a); // * The value of a is undefined

console.log("The value of b is " + b); // * The value of b is undefined
var b;

console.log("The value of c is " + c); // * Uncaught ReferenceError: c is not defined

let x;
console.log("The value of x is " + x); // * The value of x is undefined

// * console.log("The value of y is " + y); // Uncaught ReferenceError: y is not defined
let y;

// * undefined can be used to determine wheter a variable has a value
var input;
//true condition
if (input === undefined) {
  console.log("no value");
} else {
  console.log(input);
}

// * undefined value behaves as false when used in a boolean context
var myArray = [];
if (!myArray[0])
  // true
  console.log("test");

// * undefined value converts to NaN when used in numeric context
var num;
console.log(num + 2);

// * null value behaves as 0 in numeric contexts and as false in boolean contexts
var n = null;
console.log(n); // null
console.log(Number(n)); // 0
console.log(Boolean(n)); // false
