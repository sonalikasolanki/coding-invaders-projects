function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
  
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirm-password-error");
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
  
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    // Name validation
    if (name === "") {
      nameError.textContent = "Name cannot be empty.";
      nameInput.focus();
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
      nameError.textContent = "Invalid Name.";
      nameInput.focus();
      return;
    }
    if (name.length < 3 || name.length > 20) {
      nameError.textContent = "Name must be between 3 - 20 characters.";
      nameInput.focus();
      return;
    }
  
    // Email validation
    if (email === "") {
      emailError.textContent = "Email cannot be empty.";
      emailInput.focus();
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      emailInput.focus();
      return;
    }
  
    // Password validation
    if (password === "") {
      passwordError.textContent = "Password cannot be empty.";
      passwordInput.focus();
      return;
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(password)) {
      passwordError.textContent =
        "Password must be between 6-10 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.";
      passwordInput.focus();
      return;
    }
  
    // Confirm password validation
    if (confirmPassword === "") {
      confirmPasswordError.textContent = "Confirm Password cannot be empty.";
      confirmPasswordInput.focus();
      return;
    }
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Passwords don't match.";
      confirmPasswordInput.focus();
      return;
    }
  
    // Clear form fields
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  
    // Redirect to signup.html with username query parameter
    const username = name;
    window.location.href = `signup.html?username=${username}`;
  }
  