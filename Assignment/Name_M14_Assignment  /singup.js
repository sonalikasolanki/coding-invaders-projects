// Retrieve the username from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Update the username in the page
const usernameElement = document.getElementById('username');
usernameElement.textContent = username;
