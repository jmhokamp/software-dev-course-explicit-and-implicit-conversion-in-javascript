/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //converting 5 to a number
console.log("The result is: " + result);

let isValid = Boolean("false"); //No errors, code is returning true already
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //Added number to convert the string back into a number
console.log("Total Age: " + totalAge);

//Impplicit 
let implicit = null + 5;
console.log(implicit)

//Explicit
let explicit = Number("Wet Orange 11")
console.log(explicit)
