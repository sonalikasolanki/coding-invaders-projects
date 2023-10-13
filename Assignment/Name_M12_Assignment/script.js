// document.getElementById("submitBtn").addEventListener("click", function() {
//     let dateInput = document.getElementById("date").value;
//     let monthInput = document.getElementById("month").value;
//     let yearInput = document.getElementById("year").value;
    
//     // Perform validations and calculations
//     let currentDate = new Date(); // Get the current date
    
//     // Validation 1: Check if any field is empty
//     if (dateInput === "") {
//       document.getElementById("dateError").textContent = "Please provide Date";
//       return;
//     }
//     if (monthInput === "") {
//       document.getElementById("monthError").textContent = "Please provide Month";
//       return;
//     }
//     if (yearInput === "") {
//       document.getElementById("yearError").textContent = "Please provide Year";
//       return;
//     }
    
//     // Validation 2: Check if month is in the range from 1 to 12
//     if (parseInt(monthInput) < 1 || parseInt(monthInput) > 12) {
//       document.getElementById("monthError").textContent = "Please provide Month value in the range from 1 to 12";
//       return;
//     }
    
//     // Validation 3: Check if year is in the format YYYY
//     if (yearInput.length !== 4) {
//       document.getElementById("yearError").textContent = "Provide year in format YYYY";
//       return;
//     }
    
//     // Validation 4: Check if all inputs are valid numbers
//     if (isNaN(dateInput) || isNaN(monthInput) || isNaN(yearInput)) {
//       if (isNaN(dateInput)) {
//         document.getElementById("dateError").textContent = "Please provide valid Date";
//       }
//       if (isNaN(monthInput)) {
//         document.getElementById("monthError").textContent = "Please provide valid Month";
//       }
//       if (isNaN(yearInput)) {
//         document.getElementById("yearError").textContent = "Please provide valid Year";
//       }
//       return;
//     }
    
//     // Validation 5: Check if any field is a negative value
//     if (parseInt(dateInput) <= 0) {
//       document.getElementById("dateError").textContent = "Date cannot be 0 or less than 0";
//       return;
//     }
//     if (parseInt(monthInput) <= 0) {
//       document.getElementById("monthError").textContent = "Month cannot be 0 or less than 0";
//       return;
//     }
//     if (parseInt(yearInput) <= 0) {
//       document.getElementById("yearError").textContent = "Year cannot be 0 or less than 0";
//       return;
//     }
    
//     // Validation 6: Check if the date is valid with respect to the month
//     let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let selectedMonth = parseInt(monthInput) - 1; // Convert to 0-based index
//     let selectedDate = parseInt(dateInput);
    
//     if (selectedDate > monthDays[selectedMonth]) {
//       document.getElementById("dateError").textContent = "Please provide valid Date with respect to Month";
//       return;
//     }
    
//     // Calculate the age
//     let birthDate = new Date(yearInput, selectedMonth, selectedDate);
//     let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
//     let ageMonths = currentDate.getMonth() - birthDate.getMonth();
//     let ageDays = currentDate.getDate() - birthDate.getDate();
    
//     // Adjust the age if the current month or day is earlier than the birth month or day
//     if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
//       ageYears--;
//       ageMonths += 12;
//     }
    
//     // Display the result
//     let resultText = "Your Age Is " + ageYears + " Years, " + ageMonths + " Months & " + ageDays + " Days";
//     document.getElementById("resultContainer").textContent = resultText;
//   });
//    document.getElementById("submitBtn").addEventListener("click", function() {
//     let dateInput = document.getElementById("date").value;
//     let monthInput = document.getElementById("month").value;
//     let yearInput = document.getElementById("year").value;
  
//     // Perform validations and calculations
//     let currentDate = new Date(); // Get the current date
  
//     // Validation 1: Check if any field is empty
//     if (dateInput === "") {
//       document.getElementById("dateError").textContent = "Please provide Date";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("monthError").textContent ="";
//       document.getElementById("yearError").textContent ="";
//       return;
//     }
//     if (monthInput === "") {
//       document.getElementById("monthError").textContent = "Please provide Month";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("yearError").textContent ="";

//       return;
//     }
//     if (yearInput === "") {
//       document.getElementById("yearError").textContent = "Please provide Year";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("monthError").textContent ="";

//       return;
//     }
  
//     // Validation 2: Check if month is in the range from 1 to 12
//     if (parseInt(monthInput) < 1 || parseInt(monthInput) > 12) {
//       document.getElementById("monthError").textContent = "Please provide Month value in the range from 1 to 12";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("yearError").textContent ="";
//       return;
//     }
  
//     // Validation 3: Check if year is in the format YYYY
//     if (yearInput.length !== 4) {
//       document.getElementById("yearError").textContent = "Provide year in format YYYY";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("monthError").textContent ="";

//       return;
//     }
  
//     // Validation 4: Check if all inputs are valid numbers
//     if (isNaN(dateInput) || isNaN(monthInput) || isNaN(yearInput)) {
//       if (isNaN(dateInput)) {
//         document.getElementById("dateError").textContent = "Please provide valid Date";
//       }
//       if (isNaN(monthInput)) {
//         document.getElementById("monthError").textContent = "Please provide valid Month";
//       }
//       if (isNaN(yearInput)) {
//         document.getElementById("yearError").textContent = "Please provide valid Year";
//       }
//       document.getElementById("resultContainer").textContent = "";
//       return;
//     }
  
//     // Validation 5: Check if any field is a negative value
//     if (parseInt(dateInput) <= 0) {
//       document.getElementById("dateError").textContent = "Date cannot be 0 or less than 0";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("monthError").textContent ="";
//       document.getElementById("yearError").textContent ="";

    
//       return;
//     }
//     if (parseInt(monthInput) <= 0) {
//       document.getElementById("monthError").textContent = "Month cannot be 0 or less than 0";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("yearError").textContent ="";
//       return;
//     }
//     if (parseInt(yearInput) <= 0) {
//       document.getElementById("yearError").textContent = "Year cannot be 0 or less than 0";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("monthError").textContent ="";
//       return;
//     }
  
//     // Validation 6: Check if the date is valid with respect to the month
//     let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let selectedMonth = parseInt(monthInput) - 1; // Convert to 0-based index
//     let selectedDate = parseInt(dateInput);
  
//     if (selectedDate > monthDays[selectedMonth]) {
//       document.getElementById("dateError").textContent = "Please provide valid Date with respect to Month";
//       document.getElementById("resultContainer").textContent = "";
//       document.getElementById("dateError").textContent ="";
//       document.getElementById("monthError").textContent ="";

//       return;
//     }
  
//     // Calculate the age
//     let birthDate = new Date(yearInput, selectedMonth, selectedDate);
//     let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
//     let ageMonths = currentDate.getMonth() - birthDate.getMonth();
//     let ageDays = currentDate.getDate() - birthDate.getDate();
  
//     // Adjust the age if the current month or day is earlier than the birth month or day
//     if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
//       ageYears--;
//       ageMonths += 12;
//     }
  
//     // Display the result
//     let resultText = "Your Age Is " + ageYears + " Years, " + ageMonths + " Months & " + ageDays + " Days";
//     document.getElementById("resultContainer").textContent = resultText;
  
//     // Clear error messages
//     document.getElementById("dateError").textContent = "";
//     document.getElementById("monthError").textContent = "";
//     document.getElementById("yearError").textContent = "";
//   });
document.getElementById("submitBtn").addEventListener("click", function() {
    let dateInput = document.getElementById("date").value;
    let monthInput = document.getElementById("month").value;
    let yearInput = document.getElementById("year").value;
  
    // Perform validations and calculations
    let currentDate = new Date(); // Get the current date
  
    // Validation 1: Check if any field is empty
    if (dateInput === "") {
      document.getElementById("resultContainer").textContent = "Please provide Date";
      return;
    }
    if (monthInput === "") {
      document.getElementById("resultContainer").textContent = "Please provide Month";
      return;
    }
    if (yearInput === "") {
      document.getElementById("resultContainer").textContent = "Please provide Year";
      return;
    }
  
    // Validation 2: Check if month is in the range from 1 to 12
    if (parseInt(monthInput) < 1 || parseInt(monthInput) > 12) {
      document.getElementById("resultContainer").textContent = "Please provide Month value in the range from 1 to 12";
      return;
    }
  
    // Validation 3: Check if year is in the format YYYY
    if (yearInput.length !== 4) {
      document.getElementById("resultContainer").textContent = "Provide year in format YYYY";
      return;
    }
  
    // Validation 4: Check if all inputs are valid numbers
    if (isNaN(dateInput) || isNaN(monthInput) || isNaN(yearInput)) {
      if (isNaN(dateInput)) {
        document.getElementById("resultContainer").textContent = "Please provide valid Date";
      }
      if (isNaN(monthInput)) {
        document.getElementById("resultContainer").textContent = "Please provide valid Month";
      }
      if (isNaN(yearInput)) {
        document.getElementById("resultContainer").textContent = "Please provide valid Year";
      }
      return;
    }
  
    // Validation 5: Check if any field is a negative value
    if (parseInt(dateInput) <= 0) {
      document.getElementById("resultContainer").textContent = "Date cannot be 0 or less than 0";
      return;
    }
    if (parseInt(monthInput) <= 0) {
      document.getElementById("resultContainer").textContent = "Month cannot be 0 or less than 0";
      return;
    }
    if (parseInt(yearInput) <= 0) {
      document.getElementById("resultContainer").textContent = "Year cannot be 0 or less than 0";
      return;
    }
  
    // Validation 6: Check if the date is valid with respect to the month
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let selectedMonth = parseInt(monthInput) - 1; // Convert to 0-based index
    let selectedDate = parseInt(dateInput);
  
    if (selectedDate > monthDays[selectedMonth]) {
      document.getElementById("resultContainer").textContent = "Please provide valid Date with respect to Month";
      return;
    }
  
    // Calculate the age
    let birthDate = new Date(yearInput, selectedMonth, selectedDate);
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();
  
    // Adjust the age if the current month or day is earlier than the birth month or day
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    // Display the result
    let resultText = "Your Age Is " + ageYears + " Years, " + ageMonths + " Months & " + ageDays + " Days";
    document.getElementById("resultContainer").textContent = resultText;
  });
  