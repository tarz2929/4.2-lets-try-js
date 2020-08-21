// alert("Hello, World! JavaSript is loaded");

/*
* Assignments/Variables
*/


var myFirstvariable = "Hello"

// 
let mySecondVariable = "World";

//
const myThirdvariable = myFirstvariable + "," + mySecondVariable;
// Concatenation character is the "+" sign.
// it glues the string togerther
/*
* Datatypes
*/

const myString = "This is a string!";
const myInteger = 34; //Ints and Floats are technically the same data tyoe in JS. 
const myFloat = 16.782;
const myNan = NaN; //not a number" So when math goes horribly wrong..
const myTrueBool = true; // Booleans can either be True or False
const myFalseBool = false;
const myNull = null; // A defined / existing variable with no assigned value. 
const myUndefined = undefined; 
const myArray = [
    myString,
    myInteger,
    myFloat,
    myNan,
    myTrueBool,
    myFalseBool,
    myNull,
    myUndefined
];



/**
 * Writing to the console.
 */

console.log( "Hello to the browser console!" );
console.log( myArray );
console.log( 10 % 3);

// Standard Concatenation with strings.

const myName = "tarun";
const concattedString = "hello, " + myName + "!";
console.log( concattedString);

// Watch out for this gotcha'! Number addition vs. concatenation.
// They use the same operator: "+"
console.log( 3 + 3 ); // (Number)6 - this was an addition!
console.log( 3 + "3" ); // (String)"33" - this was a concatenation.
console.log( 3 + 3 + "3" ); // (String)"63" - an addition of the first two... THEN concatenation!
console.log( 3 + 3 + Number( "3" ) ); // We can use the "Number()" function in JS to convert strings to numbers.
                                      //(if it is string featuring numeric characters.)
console.log( String( 3 ) + String( 3 ) + "3" ); // We can use the "String()" function in JS to convert numbers (or other datatypes) to strings.

console.log( parseInt( 38.957 ) ); // parseInt() and parseFloat() might feel a bit more familiar for ensuring a value will or will not have decimal points.

// CONCATENATION:
// const concattedString = "Hello, " + myName + "!";
// console.log( concattedString );

// TEMPLATE LITERAL EQUIVALENT:
const templateLiteralString = `Hello, ${myName}!`; // Template literals MUST be inside back ticks " ` " NOT single quotes " ' ".
console.log( templateLiteralString );

// Back-tick strings are white-space sensitive!
// This means new-lines and spaces are maintained.
console.log( `
This is a string in back-ticks (\`).
It is white-space and new-line sensitive!
Great for formatting your outputs.
===
An example of a use for a template literal could be...
Our array: myArray is ${myArray.length} items long.
Its fourth index includes the value: ${myArray[4]}
All template literals are wrapped in: "\${}"
` );





