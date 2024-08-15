/*
    PROMISE:
    - Introduced to address the issues of callback hell, providing more  manageable way to handle async operations.
*/

function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task1 complete.");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task2 complete.");
            resolve();
        }, 1000);
    })
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task3 complete.");
            resolve();
        }, 1000);
    })
}

step1()
    .then(step2)
    .then(step3)
    .then(() => {
        console.log("All Task completed.");
    });