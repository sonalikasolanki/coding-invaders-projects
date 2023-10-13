let taste = prompt("Enter your taste preference : ");
let numberOfPeople = parseInt(prompt("Enter the number of people: "));

let recommendation;

switch (taste.toLowerCase()) {
  case "chocolate":
    recommendation = "Chocolate Dream";
    break;
  case "berries":
  case "fruits":
    recommendation = "Tropic Pleasure";
    break;
  case "nuts":
    recommendation = "Cupcake Set";
    break;
  case "cheesecake":
    recommendation = "Creamy Cheesecake";
    break;
  default:
    recommendation = "Cupcake Set";
}
console.log(`Recommended cake: ${recommendation}`);

let size;

if (numberOfPeople <= 2) {
  size = "Small";
} else if (numberOfPeople >= 3 && numberOfPeople <= 5) {
  size = "Medium";
} else {
  size = "Large";
}


console.log(`Recommended size: ${size}`);