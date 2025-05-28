// user.js

// COMMON: Utility functions
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function saveCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logout() {
    localStorage.removeItem('currentUser');
    alert('Logged out successfully.');
    window.location.href = 'user.html';
}

// ---------------------- SIGNUP HANDLER ----------------------
const signupForm = document.querySelector('.signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = document.querySelector('.fullName').value.trim();
        const phone = document.querySelector('.phone').value.trim();
        const email = document.querySelector('.signup-email').value.trim();
        const password = document.querySelector('.signup-password').value.trim();
        const confirmPassword = document.querySelector('.signup-confirm-password').value.trim();

        if (!fullName || !phone || !email || !password || !confirmPassword) {
            alert('Please fill all fields.');
            return;
        }

        if (!/^\d{7,15}$/.test(phone)) {
            alert('Enter a valid mobile number (7-15 digits).');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 6 characters long, with 1 uppercase, 1 lowercase, and 1 digit.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        let users = getUsers();
        if (users.some(u => u.email === email)) {
            alert('Email already registered.');
            return;
        }

        users.push({ fullName, phone, email, password });
        saveUsers(users);

        alert('Signup successful! Please log in.');
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    });
}

// ---------------------- LOGIN HANDLER ----------------------
const loginForm = document.querySelector('.loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.querySelector('.lgn-email').value.trim();
        const password = document.querySelector('.lgn-password').value.trim();

        let users = getUsers();

        const matchedUser = users.find(u => u.email === email && u.password === password);

        if (!matchedUser) {
            alert('Invalid email or password.');
            return;
        }

        saveCurrentUser(matchedUser);

        alert('Login successful!');
        window.location.href = 'profile.html';
    });
}

// ---------------------- PROFILE HANDLER ----------------------
if (window.location.pathname.includes('profile.html')) {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        alert('No user logged in. Please log in.');
        window.location.href = 'user.html';
    } else {
        document.getElementById('name').textContent = currentUser.fullName;
        document.getElementById('email').textContent = currentUser.email;
        document.getElementById('phone').textContent = currentUser.phone;

        const logoutBtn = document.querySelector("#logoutBtn");
        logoutBtn.addEventListener('click', logout);
    }
}

// ---------------------- SWITCH HANDLERS ----------------------
const signupLink = document.querySelector(".signupLink");
const loginLink = document.querySelector(".loginLink");

if (signupLink && loginLink) {
    signupLink.addEventListener("click", () => {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.signup-container').style.display = 'block';
    });

    loginLink.addEventListener("click", () => {
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    });
}

// ---------------------- NAVBAR PROFILE LOGIC ----------------------
document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.getElementById('profileIcon');
    const profileCard = document.getElementById('profileCard');
    const currentUser = getCurrentUser();

    if (profileIcon && profileCard) {
        if (currentUser) {
            // If logged in, hide login/signup card
            profileCard.style.display = 'none';

            // On profile icon click, go to profile page
            profileIcon.addEventListener('click', function () {
                window.location.href = 'profile.html';
            });
        } else {
            // If not logged in, show card on hover
            profileIcon.addEventListener('mouseenter', function () {
                profileCard.style.display = 'block';
            });

            profileIcon.addEventListener('mouseleave', function () {
                profileCard.style.display = 'none';
            });
        }
    }
});
