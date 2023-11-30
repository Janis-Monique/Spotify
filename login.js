function submitForm(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log('Entered username:', username);
    console.log('Entered password:', password);

    // Check if the entered username and password match any user
    const user = users.find((user) => user.username === username && user.password === password);

    console.log('User found:', user);

    if (user) {
        alert('Login successful!');
        saveUserAsJSON(user);
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
function toggleForm() {
    // Redirect to the register.html page
    window.location.href = 'register.html';
}