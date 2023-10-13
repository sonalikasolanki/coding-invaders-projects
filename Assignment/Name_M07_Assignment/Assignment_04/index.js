let movies = ["The Batman", "Don’t Look Up", "Against the Ice", "Sing 2", "Love Hard"];
let recommendations = movies.slice();
let age = parseInt(prompt("Enter your age: "));
if (age < 18) {
  let indexBatman = recommendations.indexOf("The Batman");
  let indexIce = recommendations.indexOf("Against the Ice");

  if (indexBatman !== -1) {
    recommendations[indexBatman] = "Coco";
  }

  if (indexIce !== -1) {
    recommendations[indexIce] = "Free Guy";
  }
}
console.log("Why wouldn’t you watch these movies:");
console.log(recommendations.join(", "));