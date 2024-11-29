document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const container = document.querySelector('.container');

    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('login-message');

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'home.html';
        } else {
            message.textContent = 'INVALID. PLEASE TRY AGAIN';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#fc0d7d';
        }
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const username = document.getElementById('registerusername').value;
        const password = document.getElementById('registerpassword').value;
        const confirmPassword = document.getElementById('registerconfirm').value;
        
        const message = document.getElementById('registermessage');

        if (password !== confirmPassword) {
            message.textContent = 'ERROR. PLEASE INPUT AGAIN.';
            message.style.color = 'rgb(255, 255, 255)';
            message.style.background = '#fc0d7d';
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        message.textContent = 'SUCCESSFUL';
        message.style.color = '#ffdc00';
        message.style.fontWeight = '700'; 
        message.style.fontSize = '20px';
        message.style.background = 'transparent';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    };


    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

});
