var prompt = require('prompt-sync')();
let num = prompt('Enter a number to find harmonic numbers : ');
let harmonicNum = 0;
for (var i = 1; i <= parseInt(num); i++) {
    harmonicNum = harmonicNum + 1 / i;
}
console.log(num + "th harmonic number = " + harmonicNum);