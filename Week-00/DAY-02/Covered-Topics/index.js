function sum(a, b) {
    let result = a + b;
    return result;
}

// console.log("Sum:", sum(22, 11));

function add(a, b) {
    let result = "a" + b;
    return result;
}

// console.log("Sum:", add("22", 11));

function canVote(age) {
    if (age >= 18) {
        console.log("Can Vote!");
    } else {
        console.log("Can't Vote!");
    }
}
canVote(15);
canVote(27);