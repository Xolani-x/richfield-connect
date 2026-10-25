document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate student number
    const studentNumber = document.getElementById('student-number').value.trim();
    const isAllDigits = /^\d+$/.test(studentNumber);

    if (studentNumber.length !== 8 || !isAllDigits) {
        alert('Please enter a valid 8-digit student number.');
        document.getElementById('student-number').focus();
        return;
    }

    // Validate email address
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email').focus();
        return;
    }

    // Validate matching passwords
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        document.getElementById('confirm-password').focus();
        return;
    }

    // Form validation completed
    console.log('Form validation successful!');
    alert('Welcome to Richfield Connect. Please complete your profile.');
});
