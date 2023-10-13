function submitData() {
    // Access the form values
    let firstName = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms["myForm"]["lastName"].value;
    let email = document.forms["myForm"]["email"].value;
    let city = document.forms["myForm"]["city"].value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
  
    // Create the user object
    let user = {
      fName: firstName,
      lName: lastName,
      email: email,
      city: city,
      gender: gender
    };
  
    // Print the user object data in the console
    console.log("This is " + user.fName + " " + user.lName + ", " + user.gender + " from " + user.city + " and my email id is " + user.email);
  }
