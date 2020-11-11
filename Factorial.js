var prompt = require('prompt-sync')();
let num = parseInt(prompt('Enter a non-negative integer to know factorial : '));
let factorial = 1;
if (num < 0) {
    console.log("You entered negative number")
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log("Factorial = " + factorial);
}