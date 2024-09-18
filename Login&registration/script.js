
function showLoginForm() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registrationForm').classList.remove('active');
}


function showRegistrationForm() {
    document.getElementById('registrationForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function() {
    showRegistrationForm();
});
