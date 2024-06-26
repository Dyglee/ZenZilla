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


// preferences 

document.addEventListener('DOMContentLoaded', function() {
    loadBackgroundOptions();

    const saveButton = document.getElementById('save-preferences');
    if (saveButton) {
        saveButton.addEventListener('click', savePreferences);
    }
});

function loadBackgroundOptions() {
    const imagesPath = '/static/images/';
    const backgroundOptionsContainer = document.getElementById('background-options');

    if (!backgroundOptionsContainer) {
        console.error('Element with ID background-options not found.');
        return;
    }

    const backgroundImages = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
        'background8.jpg',
        'background9.jpg',
        'background10.jpg',
        'background11.jpg',
        'background12.jpg',
        'background13.jpg',
        'background14.jpg',
        'background15.jpg',
        'background16.jpg',
        'background17.jpg',
        'background18.jpg',
        'background19.jpg',
        'background20.jpg',
        'background21.jpg',
        'background22.jpg',
        'background23.jpg',
        'background24.jpg',
        'background25.jpg',
        'background26.jpg',
        'background27.jpg',
        'background28.jpg',
        'background29.jpg'
    ];

    backgroundImages.forEach(image => {
        const imgSrc = `${imagesPath}${image}`;
        const label = document.createElement('label');
        const input = document.createElement('input');
        const img = document.createElement('img');

        input.type = 'radio';
        input.name = 'background';
        input.value = image;
        input.style.display = 'none';

        img.src = imgSrc;
        img.alt = image;
        img.classList.add('background-image');
        img.addEventListener('click', () => selectBackground(image, label));

        label.appendChild(input);
        label.appendChild(img);
        backgroundOptionsContainer.appendChild(label);
    });
}

function selectBackground(image, label) {
    const labels = document.querySelectorAll('.background-options label');
    labels.forEach(lbl => lbl.classList.remove('selected'));
    label.classList.add('selected');
    const radioButton = label.querySelector('input[type="radio"]');
    radioButton.checked = true;
}

function savePreferences() {
    const selectedBackground = document.querySelector('input[name="background"]:checked').value;
    const notificationsEnabled = document.getElementById('notifications-toggle').checked;
    const sessionDuration = document.getElementById('session-duration').value;

    const preferences = {
        background: selectedBackground,
        notifications: notificationsEnabled,
        duration: sessionDuration
    };

    fetch('/api/savePreferences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(preferences)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err });
        }
        return response.json();
    })
    .then(data => {
        console.log('Preferences saved:', data);
        alert('Preferences saved successfully!');
    })
    .catch(error => {
        console.error('Error saving preferences:', error);
        alert('Failed to save preferences.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/getPreferences')
        .then(response => response.json())
        .then(data => {
            if (data.background) {
                document.querySelector('.hero-section').style.backgroundImage = `url('/static/images/${data.background}')`;
            }
        })
        .catch(error => console.error('Error loading preferences:', error));
});