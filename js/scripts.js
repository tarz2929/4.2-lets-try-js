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


/*
Loops in JavaScript
*/

console.log("WHILE LOOPS PRACTICE : \n==============");
let myWhileIterator = 5;
while( myWhileIterator > 0)// repeats the code block so long as the condition

{ // evaluates to (boolean)true.
    console.log( `While Itrator: ${myWhileIterator}`);
    myWhileIterator--; //Mywhileiterator = mywhileIterator -1
}

console.log( "FOR...OF LOOP PRACTICE:\n==================" );
const myForArray = ["Wal-Mart", "Best Buy", "SuperStore", "Safeway"];
for ( const arrayItem of myForArray ) // for...of will iterate on its own through the array.
{ // We don't need to set a terminiation condition. We also get a great way for
  // accessing the value from each iteration, based on the name we specify before
  // the "of" keyword.
  console.log( `This array item in our loop contains: ${arrayItem}` );
}

// let myNum = 5;
// ALL THREE BELOW ARE EQUIVALENT:
// myNum = myNum + 1;
// myNum++; // Always is +1.
// myNum += 1;

console.log( "FOR LOOP PRACTICE:\n==================" );
for ( let myForIterator = -5; myForIterator < 30; myForIterator += 10 )
{ // for loops have 3 parts:
  // ASSIGNMENT; CONDITION; ITERATION
  console.log( `This iteration of our for loop's value is: ${myForIterator}` );
}

/**
 * Functions in JavaScript.
 */

function myAdditionFunction ( num1 = 0, num2 = 0 ) {
  return Number( num1 ) + Number( num2 );
}

// Testing out our function!
const add2And4 = myAdditionFunction( 2, 4 );
console.log( add2And4 );

console.log( myAdditionFunction( -15, 35 ) );

console.log( myAdditionFunction( 3.14, 70 ) );


function mySubractionFunction ( num1, num2 )
{
    const difference = num1 - num2 ;// "-" is only used to subtraction.
                                    // JS automatically tries to convert to the Number datatype in this case. 


    return difference;

}




// Fat-arrow function syntax, as an alternative.
/**
 * 1) const / let for our declaration...
 * 2) the name of our function.
 * 3) assignment operator...
 * 4) parenthesis "()" with any parameters inside.
 * 5) "fat arrow" marking the beginning of function logic.
 * 6) Here we have two options:
 *     i) What follows the fat arrow will simply be returned from the function.
 *    ii) We can use curly braces to manage larger instruction sets, which will
 *        give us more control over when / how we return from the function.
 * NOTE: The "this" keyword is not overwritten when using fat arrow functions,
 *       like it would be with a traditional function.
 * NOTE: When we set up a function using an assignment, it is not "hoisted."
 *       You cannot call upon it before its declaration. Traditional functions
 *       ARE hoisted and can be accessed anywhere in the program if in accessible
 *       scope.
 */
const myDivisionFunction = ( num1, num2 ) => num1 / num2; // See: 6.i

console.log( "Division (36, 6): " + myDivisionFunction( 36, 6 ) ); // 6

const myMultiplicationFunction = ( num1 = 0, num2 = 0 ) => { // See: 6.ii
  const product = num1 * num2;
  return product;
};

console.log( "Multiplication (3, 9): " + myMultiplicationFunction( 3, 9 ) ); // 27

/**
 *  Java Script object
 */
