var prompt = require('prompt-sync')();
let start = parseInt(prompt('Enter a starting number : '));
let end = parseInt(prompt('Enter a ending number : '));
console.log("The prime numbers in between " + start + " and " + end + " are: ");
for (let i = start; i <= end; i++) {
    let flag = new Boolean(true);
    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true && i > 2) {
        console.log(i);
    }
}