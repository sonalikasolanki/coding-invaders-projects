const guests = [
    ["001", "Johnson", "Table 2"],
    ["002", "Nisha", "Table 10"],
    ["003", "Vasav", "Table 1"],
    ["004", "Uddin", "Table 7"]
  ];
  
  let continueProgram = true;
  
  while (continueProgram && guests.length > 0) {
    let searchOption = parseInt(prompt("Enter 1 to search by ID, 2 to search by surname, or 0 to exit:"));
  
    if (searchOption === 0) {
      continueProgram = false; // Exit the program
    } else if (searchOption === 1) {
      let id = prompt("Enter the guest ID:");
      let reservationFound = false;
  
      for (let i = 0; i < guests.length; i++) {
        if (guests[i][0] === id) {
          reservationFound = true;
          console.log(`Table: ${guests[i][2]}`);
          guests.splice(i, 1); 
          break;
        }
      }
      if (!reservationFound) {
        console.log("No reservation found for the given ID.");
      }
    } 
    else if (searchOption === 2) {
      let surname = prompt("Enter the guest surname:");
      let reservationFound = false;
  
      for (let i = 0; i < guests.length; i++) {
        if (guests[i][1] === surname) {
          reservationFound = true;
          console.log(`Table: ${guests[i][2]}`);
          guests.splice(i, 1); 
          break;
        }
      }
  
      if (!reservationFound) {
        console.log("No reservation found for the given surname.");
      }
    }
  }