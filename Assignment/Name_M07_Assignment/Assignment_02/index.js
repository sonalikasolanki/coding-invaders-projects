let prices = [];
let totalSum = 0;

while (true) {
  let price = parseFloat(prompt("Enter the price of an item (or '0' to stop): "));

  if (price === 0) {
    break;
  }

  prices.push(price);
  totalSum += price;
}

if (totalSum >= 20000) {
  let discount = 0.3 * totalSum;
  let discountedTotal = totalSum - discount;
  let roundedTotal = Math.round(discountedTotal / 100) * 100;

  console.log(`Total sum to pay (after 30% discount): ${roundedTotal}`);
} else {
  console.log(`Total sum to pay: ${totalSum}`);
}