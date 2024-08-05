// Variable declaration:

// variable that can be reassigned.
let name = "Laxman Singh Koranga";

// constant variable that cannot be reassigned.
const age = 21;

// older way to declare variables, function scoped.
var isStudent = true;

/* 
ASSIGNMENT: Create a variable for each of the following: your favorite color, your height in 
cms, and whether you like pizza. Use appropriate variable declarations(let, const, or var). 
Try logging it using console.log
*/

let favoriteColor = "Red";
const height = 168;
var likePizza = false;

// console.log("What is your favorite color?", favoriteColor, "\n", " your height?", height, "\n", "do you like pizza", likePizza);

// DATA-TYPES:

// Number.
let number = 3;

// String.
let string = "Hello, JS!";

// Boolean.
let isActive = true;

// Array.
let numbers = [1, 2, 3];

// OPERATORS:

// ARITHMETIC OPERATORS:
let addition = (22 + 11);
let subtraction = (22 - 11);
let multiplication = (22 * 11);
let division = (22 / 11);
let modulus = (22 % 11);
let exponentiation = (5 ** 3);

// Increment operator.
let a = 22;
a++;
let z = a;                      // Output: 23

// Decrement operator.
let b = 22;
b--;
let y = b;                      // Output: 21

// console.log(y);

// ASSIGNMENT OPERATORS:
a = b
a += b
a -= b
a *= b
a /= b
a %= b
a **= b

// BITWISE ASSIGNMENT OPERATORS:
a &= b
a ^= b
a |= b

// NULL Coalescing Operator:

// let p = 3;               // When value is assigned, output: 3
let p;                      // when value is not assigned, output: 33
p ??= 33;

// console.log(p);             

/*
ASSIGNMENT #1: Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/
function sum(a, b) {
    let result = a + b;
    return result;
}

// console.log("Sum:", sum(22, 11));

function add(a, b) {
    let result = a + b;
    return result;
}

// console.log("Add:", add("twenty-two", 11));


/*
ASSIGNMENT #02: Write a function called canVote that returns true or false if the age of a 
user is > 18.
*/

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// console.log("Is the user above or equal to voting age: ", canVote(27));
// console.log("Is the user above or equal to voting age: ", canVote(18));
// console.log("Is the user above or equal to voting age: ", canVote(15));

/*
ASSIGNMENT #03: Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."
*/

// let num = 22;

// if (num % 2 == 0) {
//     console.log(num, "is even.");
// } else {
//     console.log(num, "is odd.");
// }

/*
ASSIGNMENT #04: Write a function called sum that finds the sum from 1 to a number.
*/

function summation(N) {
    let result = 0;

    for (let i = 0; i <= N; i++) {
        result += i;
    }
    console.log("The sum of", N, "numbers is:", result);
}
// summation(100);