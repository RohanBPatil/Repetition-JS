var prompt = require('prompt-sync')();
let money = 100;
const WON = 1;
let numOfWin = 0;
let numOfBets = 0;
while (money < 200 && money > 0) {
    numOfBets++;
    console.log(numOfBets + "th bet");
    let flip = Math.floor(Math.random() * 10) % 2;
    if (flip == WON) {
        numOfWin++;
        money++;
        console.log("You WON this bet");
    } else {
        money--;
        console.log("You LOST this bet");
    }
    console.log("You currently have " + money + " Rs.");
}
console.log("You won " + numOfWin + " times and lost " + (numOfBets - numOfWin) + " times");