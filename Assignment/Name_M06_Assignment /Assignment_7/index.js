let correctLogin = "admin_425";
let correctPassword = "jvv0oj45tm";
let attempts = 5;

while (attempts > 0) {
  let login = prompt("Enter your login: ");
  let password = prompt("Enter your password: ");

  if (login === correctLogin && password === correctPassword) {
    console.log("Success");
    break;
  } else {
    attempts--;
    if (attempts > 0) {
      console.log(`Incorrect! Try again. ${attempts} attempts left.`);
    } else {
      console.log("No attempts left. We have to block your account.");
    }
  }
}