var prompt = require('prompt-sync')();
num = parseInt(prompt('Enter a number to know prime or not : '));
let flag = new Boolean(true);
for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}
if (num <= 2) {
    flag = false;
}
if (flag == true) {
    console.log("It is a prime number");
} else {
    console.log("Not a prime number");
}