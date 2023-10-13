const N = parseInt(prompt("Enter the value of N:"));
const numbers = [];
for (let i = 0; i < N; i++) {
  const randomNumber = Math.floor(Math.random() * 201) - 100;
  numbers.push(randomNumber);
}
console.log("Random Numbers:", numbers);
const result = [];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i + 1]) {
    result.push(numbers[i]);
  }
}
console.log("Numbers greater than their right neighbors:", result.join(", "))