function showForm(formType) {
    var loginForm = document.getElementById('login-form-container');
    var signupForm = document.getElementById('signup-form-container');
    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function validateSignupForm() {
    var email = document.getElementById('signup-email').value;
    var confirmEmail = document.getElementById('confirm-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    var usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    if (!usernameRegex.test(username)) {
        alert("Invalid username. Only alphanumeric characters and underscores are allowed. Length: 3-20 characters.");
        return false;
    }

    if (email !== confirmEmail) {
        alert("Emails do not match.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(signupForm);
            const data = {
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err });
                }
                return response.json();
            })
            .then(data => {
                console.log('Signup successful:', data);
                alert('Signup successful! Please log in.');
                signupForm.reset();
                showForm('login'); // Switch to login form
            })
            .catch(error => {
                console.error('Signup error:', error);
                alert(`Signup error: ${error.error}`);
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const data = {
                email: formData.get('email'),
                password: formData.get('password')
            };

            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err });
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful:', data);
                window.location.href = '/home'; // Redirect to home page after login
            })
            .catch(error => {
                console.error('Login error:', error);
                alert(`Login error: ${error.error}`);
            });
        });
    }
});
