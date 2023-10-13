let totalIncome = 0;

while (true) {
  let input = prompt("Enter a number: ");

  if (input === null || parseInt(input) < 0) {
    break;
  }

  let number = parseInt(input);
  totalIncome += number;
  console.log(`Running total: ${totalIncome}`);
}

console.log(`Total income: ${totalIncome}`);





