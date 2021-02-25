"use strict";
/* Write a program that asks user to enter number between 1 to 5 and prints out how the number is spelled.
First, write using else if Then, refactor it to use switch
*/

const prompt = require("prompt-sync")();

let number = prompt("Please enter a number 1 to 3: ");

let numString;

switch (number) {
  case '1':
    numString = "one";
    break;
  case '2':
    numString = "two";
    break;
  case '3':
    numString = "three"
    break;
  default:
    numString = "outside range ";
}

console.log('your number is ' + numString);