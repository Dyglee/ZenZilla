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


/******************************************* Preferences **********************************************************/ 

document.addEventListener('DOMContentLoaded', function() {
    loadBackgroundOptions();
});

function loadBackgroundOptions() {
    const imagesPath = '/public/images/';
    const backgroundOptionsContainer = document.getElementById('background-options');

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

    console.log('Preferences saved:', preferences);
    // I will replace this with an actual API call to save preferences
    // Example: fetch('/api/savePreferences', { method: 'POST', body: JSON.stringify(preferences) });
}



// Sessions logic 

function startSessions() {
    const numSessions = document.getElementById('num-sessions').value;
    const timeBetweenSessions = document.getElementById('time-between-sessions').value;

    const sessionsConfig = {
        numSessions: numSessions,
        timeBetweenSessions: timeBetweenSessions
    };

    console.log('Sessions started with config:', sessionsConfig);
    // I will replace this with an actual function to start sessions
    // Example: startSessionTimer(sessionsConfig);
}