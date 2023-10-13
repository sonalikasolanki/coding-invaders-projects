let principal = parseFloat(prompt("Enter the initial sum of money: "));
let years = parseInt(prompt("Enter the number of years: "));

let interestRate = 9 / 100; 

let depositBalance = principal * (1 + interestRate * years);

console.log(`The deposit balance after ${years} years is: ${depositBalance}`);