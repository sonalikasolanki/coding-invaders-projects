let countries = [];
while (true) {
  let country = prompt("Enter a country associated with your coin collection (or '0' to stop): ");

  if (country === "0") {
    break;
  }

  countries.push(country);
}

countries.sort();

console.log(`Wow! There are coins from 4 countries in this collection: ${countries.join(", ")}`);

