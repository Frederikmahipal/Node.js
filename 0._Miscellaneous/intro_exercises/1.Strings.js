// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const floatOne = parseFloat(numberOne)
const floatTwo = parseFloat(numberTwo)
const result = floatOne + floatTwo

console.log(result)

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const number1 = parseFloat(anotherNumberOne)
const number2 = parseFloat(anotherNumberTwo)

const result2 = (number1 + number2).toFixed(2)

console.log(result2)


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const avg = (one + two + three) / 3

// Show in the console the avg. with 5 decimals

const avgFixed = avg.toFixed(5)

console.log(avgFixed)
 


// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const character = letters.charAt(2)

console.log(character)


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript



const character2 = fact.replace('j', 'J')

console.log(character2)


// --------------------------------------
