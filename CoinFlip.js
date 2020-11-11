var prompt = require('prompt-sync')();
const HEADS = 0;
const TAILS = 1;
let numOfHeads = 0;
let numOfTails = 0;
while (numOfHeads < 11 && numOfTails < 11) {
    let flip = Math.floor(Math.random() * 10) % 2;
    if (flip == HEADS) {
        numOfHeads++;
        console.log("Heads it is " + numOfHeads);
    } else {
        numOfTails++;
        console.log("Tails it is " + numOfTails);
    }
}
if (numOfHeads == 11) {
    console.log("HEADS WON!!!");
} else {
    console.log("TAILS WON!!!");
}