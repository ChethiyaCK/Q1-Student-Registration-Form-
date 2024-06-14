document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let interests = document.getElementById('interests').value.trim();
    
    if (name === '') {
        errors.push('Name is required.');
    }
    if (email === '' || !validateEmail(email)) {
        errors.push('Valid email is required.');
    }
    if (password === '' || password.length < 6) {
        errors.push('Password must be at least 6 characters.');
    }
    if (interests === '') {
        errors.push('Learning interests are required.');
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            let errorElement = document.createElement('div');
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    } else {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
