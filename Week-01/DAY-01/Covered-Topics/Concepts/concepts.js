// Functional Arguements: values passed to a function when it's invoked.

// Basic Function Arguments:

function greet(name) {                  // name: parameter
    console.log("Hello, " + name + "!");
}
greet("Laxman");                        // "Laxman": argument passed

// Multiple Arguments: 

function sum(a, b) {
    return (a + b);
}
console.log(sum(22, 11));

// Default Parameters:

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet();
greet("Harkirat");

// The "arguments" object:

function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Rest Parameters:

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(5, 6, 7, 8, 9));

// Passing Functions as Arguments(Callbacks)


// Anonymous Functions as Arguments:

greet("Bobby", function () {
    console.log("Bye!");
}());

// Passing objects and arrays as arguments:

function printUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
const user = { name: "Laxman", age: 21 };
printUser(user);

// Destructuring Function Arguments: 

function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printUser({ name: "Himanshu", age: 23 });

