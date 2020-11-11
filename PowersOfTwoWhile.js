var prompt = require('prompt-sync')();
let num = prompt('Enter a number to find powers of 2 : ');
let i = 0;
while (i <= 8 && i <= num) {
    console.log("2^" + i + " = " + Math.pow(2, i));
    i++;
}