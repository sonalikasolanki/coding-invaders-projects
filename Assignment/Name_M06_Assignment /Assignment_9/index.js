let forbiddenSymbols = ['=', '?', '*', '^', '$', '№', '@'];

let login = prompt("Enter your login: ");
let symbol = login[i];

for (let i = 0; i < login.length; i++) {
  
  
  if (forbiddenSymbols.includes(symbol)) {
    console.log(`This symbol [${symbol}] is forbidden.`);
    break;
  }
}

if (login.length === 0) {
  console.log("Login cannot be empty.");
} else {
  console.log("Correct!");
}
I





