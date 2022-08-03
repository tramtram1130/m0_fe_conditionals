// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// You are asked to enter either room #1 or room #2. Your choice was already defined in the beginning
// by the variable doorChoice having the value 1. The if statement states that if doorChoice equals 1,
// then the undefined bearClothing at the start has a new value which is 'hat'. The else statement
// would have been executed and the bearClothing variable would have been 'scarf' if the doorChoice
// variable had a value of 2 instead.
//
// 2. What variable has a new value assigned to it after the first if statement executes?
// The bearClothing variable now has a new value "hat"
//
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The if statement and else statement only covers the integers 1 and 2 for the variable doorChoice.
// The bearClothing variable still wouldn't have a value.
//
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
// Prior to line 25, we are given three options. The if statement followed by the three else statements
// determines the responses to our choices depending on which of the three options we decide.
//
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The final outcome would be "You run as fast as you can in to the next room. It's full of snakes!"
//
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The bearClothing variable will have the value "hat" and the final outcome would be
// "You tell the bear the hat is too small and it starts to cry!"
//
// 7. What is your favorite ending?
// I don't like the bear crying or snakes so I prefer the first ending.
