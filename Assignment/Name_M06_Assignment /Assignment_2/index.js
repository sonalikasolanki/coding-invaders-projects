let feedback =window.prompt("enter feedback");
let length = feedback.length;

if (length > 10 && length < 30) {
  console.log("Thanks! Here is your 15% discount.");
} else if (length >= 30) {
  console.log("We really appreciate your feedback! Here is your 30% discount.");
} else {
  console.log("Hope to see you again!");
}
