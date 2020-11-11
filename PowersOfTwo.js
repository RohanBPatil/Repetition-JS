var prompt = require('prompt-sync')();
let num = prompt('Enter a number to find powers of 2 : ');
for (let i = 0; i <= parseInt(num); i++) {
    console.log("2^" + i + " = " + Math.pow(2, i));
}
