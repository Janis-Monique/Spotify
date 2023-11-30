// register.js

const users = []; // Initialize an empty array to store registered users

function submitForm(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username is already taken
    const isUsernameTaken = users.some((user) => user.username === username);

    if (isUsernameTaken) {
        alert('Username is already taken. Please choose another one.');
    } else {
        // Add the new user to the array
        users.push({ username, password });
        alert('Registration successful! You can now login.');
        clearForm();
    }
}

function clearForm() {
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function toggleForm() {
    // Implement toggling logic if needed
    window.location.href = 'login.html'
}
