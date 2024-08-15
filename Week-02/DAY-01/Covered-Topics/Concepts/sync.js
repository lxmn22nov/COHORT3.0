// Synchronous code: executed line by line, each operation waits for the previous one to complete.

function sum(number) {
    return (number * (number + 1)) / 2;
}
console.log("Sum of 5 numbers:", sum(5));
console.log("Sum of 10 numbers:", sum(10));
console.log("Sum of 100 number:", sum(100));
