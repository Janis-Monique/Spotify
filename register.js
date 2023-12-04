//register.js

function submitForm(event) {
    event.preventDefault();

    const { value: username } = document.getElementById('username');
    const { value: password } = document.getElementById('password');

    const users = getUsersFromStorage();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Username is already taken. Please choose another one.');
    } else {
        const newUser = { username, password };
        users.push(newUser);
        alert('Registration successful! You can now login.');
        clearForm();
        saveUsersToStorage(users);
        redirectToLogin();
    }
}

function toggleForm() {
    window.location.href = 'login.html';
}

function redirectToLogin() {
    window.location.href = 'login.html';
}

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function saveUsersToStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsersFromStorage() {
    return JSON.parse(localStorage.getItem('users')) || [];
}
