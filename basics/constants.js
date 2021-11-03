/**
 * * We can create a read-only, named constant with const keyword.
 * * A constant cannot change value through assignment or be re-declared while the script is running.
 * * It must be initialized to a value.
 */

const phi = 3.14;

/**
 * * You cannot declare a constant with the same name as a function or variable in the same scope.
 * * Example:
 */

// ! WILL CAUSE AN ERROR
function f() {}
const f = 5;

// ! WILL CAUSE AN ERROR TOO
function x() {
  const g = 5;
  var g;
}

/**
 * * However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.
 */

const myObject = { key: "value" };
myObject.key = "otherValue";

/**
 * * The contents of an array also not protected, so the following statement is executed without problems.
 */

const myArray = ["JAVASCRIPT", "TYPESCRIPT"];
myArray.push("JAVA");

console.log(myArray);
