let number = parseInt(prompt("Enter a number in the Fibonacci sequence (N > 1): "));

let fib1 = 0;
let fib2 = 1;
let fibNMinus2 = 0;
let fibNMinus1 = 1;

while (fibNMinus1 < number) {
  fibNMinus2 = fibNMinus1;
  fibNMinus1 = fib1 + fib2;
  fib1 = fibNMinus2;
  fib2 = fibNMinus1;
}

if (fibNMinus1 === number) {
  console.log("Preceding Fibonacci number: ${fib1}");
  console.log("Following Fibonacci number: ${fib2}");
} else {
  console.log("${number} is not a member of the Fibonacci sequence.");
}