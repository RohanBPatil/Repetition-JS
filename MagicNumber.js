var prompt = require('prompt-sync')();
prompt('Think of a number between 1 and 100');
let magicNum = 50;
while (true) {
    let isMagic = prompt("Is " + magicNum + " a magic number? (y/n)");
    if (isMagic == "y") {
        console.log(magicNum + " is the magic number");
        break;
    }
    let lessOrGreat = prompt("Number is less or greater than " + magicNum + " ? (l/g)");
    if (lessOrGreat == "l") {
        magicNum -= Math.floor(magicNum / 2);
    } else {
        magicNum += Math.floor(magicNum / 2);
    }
}