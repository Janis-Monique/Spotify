//login.js

function submitForm(event) {
    event.preventDefault();

    const { value: username } = document.getElementById('username');
    const { value: password } = document.getElementById('password');

    const users = getUsersFromStorage();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        saveUserAsJSON(user);
        redirectToMainPage();
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function toggleForm() {
    window.location.href = 'register.html';
}

function saveUserAsJSON(user) {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('currentUser', userJSON);
}

function getUsersFromStorage() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function redirectToMainPage() {
    window.location.href = 'home.html';
}