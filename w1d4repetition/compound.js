"use strict";
/* Print out the balance of a savings account that compounds interest monthly.  Prompt the user for the 
INPUTS
initial amount 
annual interest rate
number of years to compound
OUTPUTS
month count and balance to the console
PROCESS
calculate monthly interest and number of months
loop through number of months and add incremental interest to balance and log

*/

const prompt = require("prompt-sync")();
const initialBalance = +prompt("enter initial amount: ");
const years = +prompt("enter number years: ");
const annualInterest = +prompt("enter annual interest rate, e.g., 10 for 10% interest: ");

const months = years * 12;
const monthlyInterest = .01 * annualInterest/12;

let balance = initialBalance;

console.log("Month    Balance");
console.log("  0        ", balance);

for (let i = 1; i <= months; i++) {
  balance = balance + (monthlyInterest * balance);
  console.log("  ", i, "        ", balance.toFixed(2));

}

