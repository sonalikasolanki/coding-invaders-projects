let numbers = [];
let numCount = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < numCount; i++) {
  let randomNumber = Math.floor(Math.random() * 101);
  numbers.push(randomNumber);
}
console.log("Generated Numbers:", numbers);
numbers.sort((a, b) => b - a);

console.log("Sorted Numbers (Descending Order):", numbers);