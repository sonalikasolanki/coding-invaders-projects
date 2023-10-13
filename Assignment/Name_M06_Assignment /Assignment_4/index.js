let number = parseInt(prompt("Enter a number (0 to 100): "));

if (number >= 0 && number <= 100) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  alert("Number is not in the required interval (0 to 100).");
}