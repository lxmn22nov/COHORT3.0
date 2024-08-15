/*
 CALLBACK FUNCTION: 
    - A function that is passed as an arguement to another function, executed after the completion of that function.
    - A way to handle "async" operations, like reading files, making API calls or setting timers.
 */

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data Fetched!");
        // calling the callback function.
        callback();
    }, 2000);
}

function processData() {
    console.log("Data Processed!");
}

// fetchData(processData);
// console.log(fetchData(processData));

/*
    CALLBACK HELL:
    - A situation where multiple nested callbacks are used in async programming, leading to code that is difficult to read,
        understand and maintain.
    - We need to perform multiple async operations sequentially, each depending on the result of the previous one.
*/

function task1(callback) {
    setTimeout(() => {
        console.log("Task1 completed.");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task2 completed.");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task3 completed.");
        callback();
    }, 1000);
}

// function greet() {
//     console.log("Hello, Callback");
// }

// task1(greet);

task1(() => {
    task2(() => {
        task3(() => {
            console.log("All tasks completed.");
        });
    });
});
