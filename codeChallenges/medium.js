
// MEDIUM

// Write a JavaScript program that prints out a Number: The printed
// value will depend on the value of an Number. If the Number is a mulitple of 3,
// print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is
// a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple
// of either, print the Number itself.

var randomNumber = 17

if (randomNumber % 5 === 0 && randomNumber % 3 === 0) {
  console.log("FizzBuzz")
} else if (randomNumber % 5 === 0) {
  console.log("Buzz")
} else if (randomNumber % 3 === 0) {
  console.log("Fizz")
} else {
  console.log (randomNumber)
}
