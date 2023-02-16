let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let matchMessage = document.getElementById('match-message');
let noMatchMessage = document.getElementById('no-match-message')

function checkPassword() {
    matchMessage.innerText = password.value == confirmPassword.value ? 'Passwords Match' : '';
    noMatchMessage.innerText = password.value != confirmPassword.value ? 'Passwords Do Not Match' : '';
}


password.addEventListener('keyup', () => {
    if (confirmPassword.value !=0) checkPassword()
    matchMessage.style.color = "#2ecc71"
    noMatchMessage.style.color = "#e74c3c"
})


confirmPassword.addEventListener('keyup', checkPassword);